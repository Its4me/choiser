
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChoiseComponent } from './choise/choise.component';
import { HeaderComponent } from './header/header.component';
import { SessionService } from '../core/session.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ChoiseComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ SessionService ]
})
export class ChoiseModule { }
