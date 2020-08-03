import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteeDashboardComponent } from './reportee-dashboard/reportee-dashboard.component';
import { AuthGuard } from './../services/auth/auth.guard';

const reporteeRoutes: Routes = [
    {
        path: 'reportee-dash',
        component: ReporteeDashboardComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(reporteeRoutes)],
  exports: [RouterModule]
})
export class ReporteeRoutingModule { }
