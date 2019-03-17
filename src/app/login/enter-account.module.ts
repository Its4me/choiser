import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterAccountComponent } from './enter-account/enter-account.component';
import { EnterLeftComponent } from './enter-left/enter-left.component';
import { SharedModule } from './../shared/shared.module';
import { EnterRightLoginComponent } from './enter-right-login/enter-right-login.component';
import { EnterRightRegisterComponent } from './enter-right-register/enter-right-register.component';
import { EnterAccountService } from './enter-account.service';

@NgModule({
  declarations: [
    EnterAccountComponent,
    EnterLeftComponent,
    EnterRightLoginComponent,
    EnterRightRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ EnterAccountService ]
})
export class EnterAccountModule { }
