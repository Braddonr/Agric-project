import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { AdsComponent } from './ads/ads.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProductsService } from 'src/app/shared/landing/landingpage/services/products.service';




@NgModule({
  declarations: [
    AdsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdsRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzIconModule,
    NzBadgeModule,
    NzDropDownModule,
    NzMenuModule,
    NzUploadModule,
    NzMessageModule,
    NzButtonModule
  ],
  providers:[
    ProductsService
  ]
})
export class AdsModule { }
