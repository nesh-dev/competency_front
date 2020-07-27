
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {UpdateProfileComponent} from './dashboard/update-profile/update-profile.component';


const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/landing-page'},
    { path: 'dashboard', pathMatch: 'full', redirectTo: '/dashboard' },
    {path: '', pathMatch: 'full', redirectTo: '/create-department'}, 
    { path: "profile", component: ProfileComponent },
    { path: "edit", component: UpdateProfileComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
