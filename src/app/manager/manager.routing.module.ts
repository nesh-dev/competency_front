import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddManagerFormComponent } from './add-manager-form/add-manager-form.component';
import { AuthGuard } from './../services/auth/auth.guard';

const managerRoutes: Routes = [
    {
        path: 'add-manager',
        component: AddManagerFormComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(managerRoutes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
