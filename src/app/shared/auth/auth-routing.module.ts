import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { ConfirmfailComponent } from './confirmfail/confirmfail.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmpassComponent } from './confirmpass/confirmpass.component';


const routes: Routes = [
  {
    path: 'confirmpass',
    component: ConfirmpassComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration' ,
    component : RegistrationComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'resetpass',
    component: ResetpassComponent
  },
  {
    path: 'forgotpass',
    component: ForgotpassComponent
  },
  {
    path: 'confirmfail',
    component: ConfirmfailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
