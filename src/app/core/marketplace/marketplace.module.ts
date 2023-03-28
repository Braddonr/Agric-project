import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { PdetailsComponent } from './pdetails/pdetails.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CartComponent } from './cart/cart.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedFilterModule } from 'src/app/shared/shared-filter/shared-filter.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { RegisterComponent } from 'src/app/shared/auth/register/register.component';

@Injectable({
  providedIn: 'root',

})

@NgModule({
  declarations: [
    
    PdetailsComponent,
    CartComponent,
    CheckoutComponent,
         
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarketplaceRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzIconModule,
    NzBadgeModule,
    SharedFilterModule,
    NzRadioModule
    
  ],
  providers: [
    RegisterComponent
  ]
})
export class MarketplaceModule { }
