import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-right-login',
  templateUrl: './enter-right-login.component.html',
  styleUrls: ['./enter-right-login.component.scss']
})
export class EnterRightLoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email,
    ])),
    pass: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(25)
    ]))
  });

  constructor(
    public router: Router
  ) {
   }

  ngOnInit() {
  }
  enterAccount(){
    if(this.login.invalid){
      return;
    }
    
    this.router.navigate(['/choise']);
  }

}
