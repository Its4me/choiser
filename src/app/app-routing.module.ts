import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterAccountComponent } from './login/enter-account/enter-account.component';
import { EnterRightLoginComponent } from './login/enter-right-login/enter-right-login.component';
import { EnterRightRegisterComponent } from './login/enter-right-register/enter-right-register.component';

const routes: Routes = [
  { path: '', component: EnterAccountComponent, children: [
    { path: '', redirectTo : 'login', pathMatch: 'full' },
    { path: 'login', component: EnterRightLoginComponent },
    { path: 'register', component: EnterRightRegisterComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
