import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = localStorage.getItem('currentUser')
        let token;
        if(currentUser) {
          token = JSON.parse(currentUser).token;
        }
       
        let headers;
        if(token){
          headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
        }
        const AuthRequest = request.clone( { headers: headers});
        return next.handle(AuthRequest);
    
  }

}
