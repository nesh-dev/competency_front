import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewrolesComponent } from './viewroles/viewroles.component'
import {RolesRoutingModule} from './roles.routing.module';
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
import { NgCircleProgressModule } from 'ng-circle-progress';




@NgModule({
  declarations: [ViewrolesComponent],
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
    RolesRoutingModule,
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
export class RolesModule { }
