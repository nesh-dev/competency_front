import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Department } from './create-department.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateDepartmentService {


  departments: Department[] = [{
  departmentname : "HR",
    departmentcode: '1234',
    assignmanager: 'Rose Kairu'
  },
  {
    departmentname: 'Procurement',
    departmentcode: '5467',
    assignmanager: 'Collin Owino'
  },
  {
    departmentname: 'Curriculum',
    departmentcode: '8910',
    assignmanager: 'Rose Kairu'
  }];
  departmentsUrl: string;


  constructor(private http: HttpClient) { }

  public getDepartments(): any{
    const departmentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.departments);
      },1000);
    });

    return departmentsObservable;
  }
  getDepartment() {
    return this.http.get(this.departmentsUrl);
  }

}
