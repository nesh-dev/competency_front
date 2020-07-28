import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {LandingRoutingModule} from './landing.routing.module';
import { RouterModule} from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatRadioModule } from  '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    LandingRoutingModule,
    RouterModule,
  ]
})
export class LandingModule { }
