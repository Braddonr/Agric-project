import { NgModule,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './shared/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { HomeComponent } from './shared/landing/home/home.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, LaptopOutline, NotificationOutline, LockOutline, SearchOutline, ShoppingCartOutline, MessageOutline, BellOutline, FacebookFill, FacebookOutline, WhatsAppOutline, TwitterOutline, TwitterCircleFill, InboxOutline, InstagramOutline, HomeFill, CalendarOutline, CompassOutline, EyeOutline, MinusOutline, PlusOutline, } from '@ant-design/icons-angular/icons';
import { LayoutComponent } from './shared/layout/layout/layout.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ForgotpassComponent } from './shared/auth/forgotpass/forgotpass.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
// import { RegistrationComponent } from './shared/auth/registration/registration.component';


const icons: IconDefinition[] = [ MinusOutline, PlusOutline, UserOutline, LaptopOutline, NotificationOutline, LockOutline, SearchOutline, ShoppingCartOutline, MessageOutline, BellOutline, FacebookFill, TwitterOutline, InstagramOutline, HomeFill, CalendarOutline, CompassOutline, EyeOutline, FacebookOutline, WhatsAppOutline, TwitterCircleFill, InboxOutline];
// const CLIENT_ID = environment.client_Id;

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzSelectModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule.forChild(icons),
    NzMenuModule,
    AutoCompleteModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('240548118048-7js0nnpmhkhd3bnttihmeti8i14efh2k.apps.googleusercontent.com')
          },
        ],
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
