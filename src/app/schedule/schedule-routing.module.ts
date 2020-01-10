import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScheduleVehicleComponent} from "./schedule-vehicle/schedule-vehicle.component";


const routes: Routes = [
  {
    path: '',
    component: ScheduleVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
