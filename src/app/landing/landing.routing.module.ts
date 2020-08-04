import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const landingRoutes: Routes = [
    {
        path: 'landing-page',
        component: LandingPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(landingRoutes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
