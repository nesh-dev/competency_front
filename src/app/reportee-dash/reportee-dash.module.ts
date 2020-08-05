import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteeDashboardComponent } from './reportee-dashboard/reportee-dashboard.component';
import {ReporteeRoutingModule} from './reportee-dash.routing.module';
import { RouterModule} from '@angular/router';
import {SharedmoduleModule} from '../sharedmodule/sharedmodule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatRadioModule } from  '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [ReporteeDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonModule,
    MatSidenavModule,
    ReporteeRoutingModule,
    RouterModule,
    SharedmoduleModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
  ]
})
export class ReporteeDashModule { }
