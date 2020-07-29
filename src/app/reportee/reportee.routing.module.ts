import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReporteeFormComponent } from './add-reportee-form/add-reportee-form.component';

const reporteeRoutes: Routes = [
    {
        path: 'add-reportee',
        component: AddReporteeFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(reporteeRoutes)],
  exports: [RouterModule]
})
export class ReporteeRoutingModule { }
