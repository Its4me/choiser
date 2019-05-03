
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChoiseComponent } from './choise-component/choise.component';
import { HeaderComponent } from '../header/header.component';
import { SessionService } from '../../core/session.service';
import { SharedModule } from '../../shared/shared.module';
import { ChoisePhotoComponent } from './choise-photo/choise-photo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ChoiseComponent,
    ChoisePhotoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ SessionService ]
})
export class ChoiseModule { }
