import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReporteeFormComponent } from './add-reportee-form/add-reportee-form.component';
import { AuthGuard } from './../services/auth/auth.guard';

const reporteeRoutes: Routes = [
    {
        path: 'add-reportee',
        component: AddReporteeFormComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(reporteeRoutes)],
  exports: [RouterModule]
})
export class ReporteeRoutingModule { }
