
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterAccountComponent } from './login/enter-account/enter-account.component';
import { EnterRightLoginComponent } from './login/enter-right-login/enter-right-login.component';
import { EnterRightRegisterComponent } from './login/enter-right-register/enter-right-register.component';
import { HeaderComponent } from './main-app/header/header.component';
import { ChoiseComponent } from './main-app/choise/choise-component/choise.component';
import { RatingComponent } from './main-app/rating/rating-component/rating.component';

const routes: Routes = [
  { path: '', component: HeaderComponent, children: [
    { path: '', redirectTo : 'choise', pathMatch: 'full' },
    { path: 'choise', component: ChoiseComponent },
    { path: 'rating', component: RatingComponent },
  ]},
  { path: 'login', component: EnterAccountComponent, children: [
    { path: '', redirectTo : 'enter', pathMatch: 'full' },
    { path: 'enter', component: EnterRightLoginComponent },
    { path: 'register', component: EnterRightRegisterComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
