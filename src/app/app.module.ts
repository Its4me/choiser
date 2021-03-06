import { ChoiseModule } from './main-app/choise/choise.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EnterAccountModule } from './login/enter-account.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { RatingModule } from './main-app/rating/rating.module';




@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      EnterAccountModule,
      SharedModule,
      AppRoutingModule,
      ChoiseModule,
      RatingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
