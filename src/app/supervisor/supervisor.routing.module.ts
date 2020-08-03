import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';
import { AuthGuard } from './../services/auth/auth.guard';

const supervisorRoutes: Routes = [
    {
        path: 'supervisor-dash',
        component: SupervisorDashboardComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(supervisorRoutes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule { }
