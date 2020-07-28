import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';

import { Department } from './create-department.model';

@Injectable({
  providedIn: 'root'
})
export class CreateDepartmentService {

  departments: Department[] = [{
    departmentname: 'HR',
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

  constructor() { }

  public getDepartments(): any{
    const departmentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.departments);
      },1000);
    });

    return departmentsObservable;
  }
}
