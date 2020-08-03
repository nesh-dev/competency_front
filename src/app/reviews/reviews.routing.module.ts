import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewreviewsComponent } from './viewreviews/viewreviews.component';
import { AuthGuard } from './../services/auth/auth.guard';

const reviewsRoutes: Routes = [
    {
        path: 'view-reviews',
        component: ViewreviewsComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(reviewsRoutes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
