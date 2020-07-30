import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';

const supervisorRoutes: Routes = [
    {
        path: 'supervisor-dash',
        component: SupervisorDashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(supervisorRoutes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule { }
