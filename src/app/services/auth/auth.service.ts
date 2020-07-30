import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { UserInfo } from "../../interfaces/user";
import * as jwt_decode from "jwt-decode";



@Injectable({ providedIn: 'root' })

export class AuthService {

    isLogin = false;

    roleAs: string;

    registerUrl = `${environment.BASE_URL}signup/`;
    loginUrl = `${environment.BASE_URL}login/`
    
    private httpOptions;

    public get currentUserValue() {
      const userData  = JSON.parse(localStorage.getItem('currentUser'));
      const { token } = userData;
      const {id } = this.getDecodedAccessToken(token)
      return id
    }


    constructor(private httpClient: HttpClient){
        this.httpOptions = {
            headers: new HttpHeaders({ "Content-Type": "application/json" }),
          }

    }   

    register(data: Object): Observable<any> {
        return this.httpClient.post<any>(`${this.registerUrl}`, {...data}, this.httpOptions)
    }

    loginUser(data: Object): Observable<any> {
        return this.httpClient.post<UserInfo>(this.loginUrl, {...data}, this.httpOptions)
        .pipe(
            map((user) => {
              localStorage.setItem("currentUser", JSON.stringify(user));
              return user;
            })
          );
    }


    isLoggedIn() {
        const loggedIn = localStorage.getItem('currentUser');
        if (loggedIn)
          this.isLogin = true;
        else
          this.isLogin = false;
        return this.isLogin;
      }

      getDecodedAccessToken(token: string): any {
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
      }
    
      getRole() {
        const userData  = JSON.parse(localStorage.getItem('currentUser'));
        const { token } = userData;
        const {is_manager, is_reportee, is_supervisor } = this.getDecodedAccessToken(token)
        if (is_reportee){
          return 'reportee'
        }else if(is_manager){
          return 'manager'
        }else if(is_supervisor){
          return 'supervisor'
        }
       
      }
}
