import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const updateProfileRoutes: Routes = [
    {
        path: 'edit',
        component: UpdateProfileComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(updateProfileRoutes)],
  exports: [RouterModule]
})
export class UpdateProfileRoutingModule { }