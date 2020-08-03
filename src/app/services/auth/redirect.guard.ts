import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RedirectGuardService implements CanActivate {
  constructor(
      private router: Router,
      private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
  
    let url: string = state.url;
    return this.checkUserLogin(route, url);
  }

  switchDasbboard(role){
    switch(role) {
      case 'reportee':
        return this.router.navigate(['/create-department']);
        break;
      case 'manager':
        return this.router.navigate(['/manager-dash']);
        break;
      default:
        return this.router.navigate(['/supervisor-dash']);
    }
  }

  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.authService.isLoggedIn()) {

      const userRole = this.authService.getRole();
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        return false;
      }
      this.switchDasbboard(userRole)
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

