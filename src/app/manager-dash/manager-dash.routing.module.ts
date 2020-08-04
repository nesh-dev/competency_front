import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { AuthGuard } from '../services/auth/auth.guard';

const managerRoutes: Routes = [
    {
        path: 'manager-dash',
        canActivate: [ AuthGuard ],
        component: ManagerDashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(managerRoutes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
