import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  readonly URL ='http://localhost:8080';
  vehicles: any;
  dataSource: any;

  displayedColumns: string[] =[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  getVehicles(){
    return this.http.get(this.URL + '/vehicles');
  }
  ngOnInit() {
    this.getVehicles().subscribe(response => {

      this.vehicles = response;
      this.dataSource = new MatTableDataSource(this.vehicles);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}
