import { EnterAccountService } from './../enter-account.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-enter-right-register',
  templateUrl: './enter-right-register.component.html',
  styleUrls: ['./enter-right-register.component.scss']
})
export class EnterRightRegisterComponent implements OnInit {
  register: FormGroup[] = [];
  regions: any;
  cities: any = null;
  filterCities: any;
  filterRegions:  any;
//   try = [
//     {areas: ['a','b','c','d'], name: '1'}, 
//     {areas: ['qw','er','rt','as'], name: '2'}, 
//     {areas: ['qwe','zxc','cvb','uyu'], name: '3'}
// ]
    
    
  
  constructor(
    private formBuilder: FormBuilder,
    private enterServ:  EnterAccountService
    ) {

    // register step 1
    this.register[0] = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      pass: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25)
      ])),
      confirmPass: new FormControl('', Validators.compose([
        Validators.required
      ]))
    },{ validator: this.MustMatch('pass', 'confirmPass')  });
  
    // register step 2
    this.register[1] = this.formBuilder.group({
      name:  new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ])),
      nickname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ])),
      sex: new FormControl('', Validators.required)
    });

    // register step 3
    this.register[2] =  this.formBuilder.group({
      region: new FormControl('', Validators.required ),
      city: new FormControl({value: 'Выберите область', disabled: true}, Validators.required )
     });
  
    }
 

  ngOnInit() {
    this.register[2].controls['region'].valueChanges
    .pipe(
      map(value => this._filter(value, this.regions))
    ).subscribe(
      res => {
        this.filterRegions = res;
      }
    );

    this.register[2].controls['city'].valueChanges
    .pipe(
      map(value => this._filter(value, this.cities))
    ).subscribe(
      res => {
        this.filterCities = res;
      }
    );
  }
  
  private _filter(value: string, array: any): string {
    let filterValue = value.toLocaleLowerCase();
    if(array){
      return array.filter(option => option.name.toLowerCase().includes(filterValue));
    }else{
      return;
    }
    
  }
  selectRegion(){
    let selectedRegion = this.register[2].get('region').value;
    let consilience = false;
    this.regions.forEach(region => {
      if(region.name == selectedRegion){
        this.filterCities = region.areas;
        this.cities = region.areas;
        this.register[2].get('city').enable();
        this.register[2].get('city').setValue('');
        consilience = true;
      }
    });
    if(!consilience){
      this.register[2].get('city').disable();
      this.register[2].get('city').setValue('Выберите область');
    }
  }

  

  

  stepValid(stepNumber: number, ...valid): boolean{
    for (let i = 0; i < valid.length; i++) {
      if(this.register[ stepNumber ].controls[ valid[ i ] ].valid == false){
        return false;
      }
    }
    return  true;
  }

  async getCities(){
    let timeCity = await this.enterServ.getCities();
    this.regions = await timeCity.areas;
    this.filterCities = await timeCity.areas;
  }

  private MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
}
