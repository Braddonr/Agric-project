import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LandingRoutingModule } from './landing-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ProfComponent } from './createprofile/prof/prof.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from '../filter copy/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedFilterModule } from '../shared-filter/shared-filter.module';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { ProductsService } from './landingpage/services/products.service';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    ProfileComponent,
    LandingPageComponent,
    ProfComponent
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    LandingRoutingModule,
    NzLayoutModule,
    NzInputModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzBadgeModule,
    NzMenuModule,
    HttpClientModule,
    SharedFilterModule,
    AutoCompleteModule,
    NzAutocompleteModule
  ],
  providers:[
    ProductsService
  ]
})
export class LandingModule { }
