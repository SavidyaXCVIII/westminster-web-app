import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Schedule} from "../model/schedule.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddScheduleService {
  readonly ROOT_URL = 'http://localhost:8080';

  addSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.ROOT_URL + '/schedule', schedule, httpOptions)
  }

  constructor(private http: HttpClient) {
  }

}


const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }
  )
}
