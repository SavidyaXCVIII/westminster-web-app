import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewListComponent } from './view-list/view-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [ViewListComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ]
})
export class ViewModule { }
