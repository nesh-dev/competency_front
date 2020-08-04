
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './dashboard/update-profile/update-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuard } from './services/auth/auth.guard'
import { RedirectGuardService } from './services/auth/redirect.guard'

const appRoutes: Routes = [
    { path : '', redirectTo : '', pathMatch: 'full' , canActivate : [ RedirectGuardService ] },
    { path: 'dashboard', pathMatch: 'full', redirectTo: '/dashboard', canActivate : [ AuthGuard ]  },
    { path: "update-profile", component: UpdateProfileComponent, canActivate : [ AuthGuard ] },
    { path: "sidebar", component: SidebarComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
