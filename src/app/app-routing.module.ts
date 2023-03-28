import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth.guard';

import { HomeComponent } from './shared/landing/home/home.component';
import { LandingPageComponent } from './shared/landing/landingpage/landingpage.component';
import { ProfileComponent } from './shared/landing/profile/profile.component';
import { LayoutComponent } from './shared/layout/layout/layout.component';



const routes: Routes = [

  {
   path: '',
   redirectTo: '/shared/login',
   pathMatch: "full" 

  },
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: 'profile',
    component: ProfileComponent 
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/landing/landing.module').then(m => m.LandingModule),
    canActivate:[AuthGuard]
  
  },
  {
    path: 'core',
    loadChildren: () => import('./core/marketplace/marketplace.module').then(m => m.MarketplaceModule), 
    canActivate:[AuthGuard]
  },
  {
    path: 'core',
    loadChildren: () => import('./core/ads/ads.module').then(m => m.AdsModule),
    canActivate:[AuthGuard]
  },

  {
    path: 'layout',
    component: LayoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
