import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// routes
const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/login'},
    { path: 'dashboard', pathMatch: 'full', redirectTo: '/dashboard' }, 
    {path: '', pathMatch: 'full', redirectTo: '/create-department'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
