import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddManagerFormComponent } from './add-manager-form/add-manager-form.component';

const managerRoutes: Routes = [
    {
        path: 'add-manager',
        component: AddManagerFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(managerRoutes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
