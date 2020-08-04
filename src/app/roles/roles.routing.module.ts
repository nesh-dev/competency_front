import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewrolesComponent } from './viewroles/viewroles.component';
import { AuthGuard } from './../services/auth/auth.guard';

const rolesRoutes: Routes = [
    {
        path: 'view-roles',
        component: ViewrolesComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(rolesRoutes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
