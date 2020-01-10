import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleVehicleComponent } from './schedule-vehicle/schedule-vehicle.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [ScheduleVehicleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class ScheduleModule { }
