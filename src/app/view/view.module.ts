import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewListComponent } from './view-list/view-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [ViewListComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class ViewModule { }
