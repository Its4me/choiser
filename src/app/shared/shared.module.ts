import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  declarations: [],
  exports: [
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatStepperModule,
    MatRadioModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
