import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisorDashboardComponent } from './supervisor-dashboard/supervisor-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SupervisorRoutingModule} from './supervisor.routing.module';
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




@NgModule({
  declarations: [
    SupervisorDashboardComponent],
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
    MatSidenavModule,
    SupervisorRoutingModule,
    RouterModule,
    SharedmoduleModule,
  ]
})
export class SupervisorModule { }
