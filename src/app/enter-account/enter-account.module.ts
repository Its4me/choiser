import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterAccountComponent } from './enter-account.component';
import { EnterLeftComponent } from './enter-left/enter-left.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    EnterAccountComponent,
    EnterLeftComponent
  ],
  exports: [
    EnterAccountComponent,
    EnterLeftComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EnterAccountModule { }
