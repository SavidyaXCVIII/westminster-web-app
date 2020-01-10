import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AddScheduleService} from "../service/add-schedule.service";
import {Schedule} from "../model/schedule.model";

@Component({
  selector: 'app-schedule-vehicle',
  templateUrl: './schedule-vehicle.component.html',
  styleUrls: ['./schedule-vehicle.component.css']
})
export class ScheduleVehicleComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private http:HttpClient,
              private addScheduleService: AddScheduleService
              ) { }
  readonly URL = 'http://localhost:8080';
  vehicles: any;
  schedule: Schedule = new Schedule();


  ngOnInit() {
    this.getVehicles();
  }

  onSubmit() {
    console.log('Schedule', this.schedule);
    this.addScheduleService.addSchedule(this.schedule).subscribe(
      response => {
        console.log('Schedule added successfully');
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  getVehicles() {
    this.vehicles = this.http.get(this.URL + '/vehicles');
    console.log('Vehicle List', this.vehicles);
  }

  date = new FormControl(new Date());
  miniCurrentDate = new Date();

}


