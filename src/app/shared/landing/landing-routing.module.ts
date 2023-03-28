import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfComponent } from './createprofile/prof/prof.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'prof',
    component: ProfComponent
  },
  {
    path: 'landingpage',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
