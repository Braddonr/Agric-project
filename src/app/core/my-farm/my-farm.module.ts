import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFarmRoutingModule } from './my-farm-routing.module';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    MyFarmRoutingModule
  ]
})
export class MyFarmModule { }
