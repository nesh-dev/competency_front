import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ManagerRoutingModule} from './manager-dash.routing.module';
import { RouterModule} from '@angular/router';


import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatRadioModule } from  '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';





@NgModule({
  declarations: [ManagerDashboardComponent],
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
  ]
})
export class ManagerDashboardModule { }
