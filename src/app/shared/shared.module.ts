import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  exports: [
    MatIconModule,
    BrowserAnimationsModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
