import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  { path: "sidebar", component: SidebarComponent },
  { path: "edit", component: UpdateProfileComponent },
  { path: "**", redirectTo: "sidebar" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
