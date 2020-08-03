import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDepartmentFormComponent } from './create-department-form/create-department-form.component';
import { AuthGuard } from './../services/auth/auth.guard'

const departmentRoutes: Routes = [
    {
        path: 'create-department',
        component: CreateDepartmentFormComponent, 
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(departmentRoutes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
