import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';



const assessmentFormRoutes: Routes = [
    {
        path: 'assessment',
        component: AssessmentFormComponent,

    }
];

@NgModule({
  imports: [RouterModule.forChild(assessmentFormRoutes)],
  exports: [RouterModule]
})
export class AssessmentFormRoutingModule {  }