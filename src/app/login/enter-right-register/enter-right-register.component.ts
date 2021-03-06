import { SessionService } from './../../core/session.service';
import { EnterAccountService } from './../enter-account.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';

import { User } from './../../core/User';

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

    
  
  constructor(
    private formBuilder: FormBuilder,
    private enterServ:  EnterAccountService,
    private router: Router,
    private sessionServ: SessionService
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
     }, 
      { validators: [
        this.regionValidation('region', true), 
        this.regionValidation('city', false)
      ]},
     );
  
    }
 

  ngOnInit() {
    this.register[2].controls['region'].valueChanges
    .pipe(
      startWith(''),
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
 
  
  async getCities(){
    if(this.regions && this.filterCities){
      return;
    }
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
  private regionValidation(region: string, choseArray: boolean) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[region];
        let array: any = choseArray? this.regions : this.cities;
        let checkError: boolean = true;
        if(array){
          array.forEach(reg => {
            if(reg.name == control.value){
              checkError = false;
            }
          });
        }
       
        checkError? control.setErrors({ unkwounRegion: true }) : control.setErrors(null);

    }

  }
  registerAccount(){
    this.register.forEach((elem)=>{
      if(elem.invalid){
        return;
      }
    });

    let user: User = new User({
        email: this.register[0].get('email').value,
        password: this.register[0].get('pass').value,
        confimPassword: this.register[0].get('confirmPass').value,
        name: this.register[1].get('name').value,
        lastname: this.register[1].get('lastname').value,
        nickname: this.register[1].get('lastname').value,
        sex: this.register[1].get('sex').value,
        region: this.register[2].get('region').value,
        city: this.register[2].get('city').value,
    });
    
    this.enterServ.registerUser(user).subscribe(res =>{
      user.id = res.id;                                              /*примерный код, зависит от бека*/
      this.sessionServ.user = user;
      this.router.navigate(['choise']);
    }, err =>{
      /*if error */
    });


    
    
  }
}
