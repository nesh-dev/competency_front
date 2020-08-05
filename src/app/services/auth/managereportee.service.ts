import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { UserInfo } from "../../interfaces/user";
import * as jwt_decode from "jwt-decode";



@Injectable({ providedIn: 'root' })

export class ManagereporteeService {


    roleAs: string;

    managerUrl = `${environment.BASE_URL}signup/`;
    reporteeUrl = `${environment.BASE_URL}signup/`;
    
    private httpOptions;
    private currentUserSubject: BehaviorSubject<UserInfo>;
    public currentUser: Observable<UserInfo>;

    public get currentUserValue() {
        return this.currentUserSubject.asObservable();
    }


    constructor(private httpClient: HttpClient){
        this.httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
          }

    }   

      addManager(data: Object): Observable<any> {
        return this.httpClient.post<any>(`${this.managerUrl}`, {...data}, this.httpOptions)
      }

      addReportee(data: Object): Observable<any> {
        return this.httpClient.post<any>(`${this.reporteeUrl}`, {...data}, this.httpOptions)
      }
}
