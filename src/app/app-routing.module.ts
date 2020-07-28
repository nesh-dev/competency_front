import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateProfileComponent} from './dashboard/update-profile/update-profile.component';


const routes: Routes = [
  
  { path: "edit", component: UpdateProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
