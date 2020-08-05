import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ManagerRoutingModule} from './manager-dash.routing.module';
import { RouterModule} from '@angular/router';
import {SharedmoduleModule} from '../sharedmodule/sharedmodule.module';




import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatRadioModule } from  '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgCircleProgressModule } from 'ng-circle-progress';






@NgModule({
  declarations: [
    ManagerDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatGridListModule,
    MatButtonModule,
    ManagerRoutingModule,
    RouterModule,
    SharedmoduleModule,
    MatSidenavModule,
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
export class ManagerDashboardModule { }
