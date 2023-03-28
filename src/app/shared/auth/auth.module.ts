import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { ConfirmfailComponent } from './confirmfail/confirmfail.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmpassComponent } from './confirmpass/confirmpass.component';

@NgModule({
  declarations: [
    ConfirmpassComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent,
    ConfirmedComponent,
    ConfirmfailComponent,
    ResetpassComponent,
    RegistrationComponent,
    ConfirmpassComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzIconModule,
    NzButtonModule,
    NzGridModule,
    NzRadioModule,
    NzGridModule,
    NzCheckboxModule,
    NzToolTipModule,
    HttpClientModule,
    NzResultModule
  ]
  
})


export class AuthModule { }
