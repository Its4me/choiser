import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-right-register',
  templateUrl: './enter-right-register.component.html',
  styleUrls: ['./enter-right-register.component.scss']
})
export class EnterRightRegisterComponent implements OnInit {
  register: FormGroup[] = [];
  constructor(
    private formBuilder: FormBuilder
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
      sex: new FormControl('', Validators.required)
    });

    // register step 3
    this.register[2] =  this.formBuilder.group({
      nickname: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]))
    });
    
  }
  

 

  ngOnInit() {
    
  }


  MustMatch(controlName: string, matchingControlName: string) {
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

  stepValid(stepNumber: number, ...valid): boolean{
    for (let i = 0; i < valid.length; i++) {
      if(this.register[ stepNumber ].controls[ valid[ i ] ].valid == false){
        return false;
      }
    }
    return  true;
  }
}
