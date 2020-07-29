
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/landing-page'},
    { path: 'dashboard', pathMatch: 'full', redirectTo: '/dashboard' },
    {path: '', pathMatch: 'full', redirectTo: '/create-department'}, 
    { path: "edit", component: UpdateProfileComponent },
    { path: "sidebar", component: SidebarComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
