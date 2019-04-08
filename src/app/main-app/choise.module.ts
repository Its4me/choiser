import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChoiseComponent } from './choise/choise.component';
import { HeaderComponent } from './header/header.component';
import { SessionService } from '../core/session.service';

@NgModule({
  declarations: [
    HeaderComponent,
    ChoiseComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ SessionService ]
})
export class ChoiseModule { }
