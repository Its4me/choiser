import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating-component/rating.component';
import { RatingCardComponent } from './rating-card/rating-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    RatingComponent,
    RatingCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RatingModule { }
