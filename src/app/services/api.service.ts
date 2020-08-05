import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private departmentUrl = 'https://comptency-framework-be.herokuapp.com/api/v1/department/{id}/';

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getDepartments(): any{
    const departmentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.getDepartments);
      }, 1000);
    });

}

}
