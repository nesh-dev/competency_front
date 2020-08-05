import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDepartmentFormComponent } from './create-department-form/create-department-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DepartmentRoutingModule} from './department.routing.module';
import { RouterModule} from '@angular/router';
import { ApiService } from '../services/api.service';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { from } from 'rxjs';



@NgModule({
  declarations: [CreateDepartmentFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    DepartmentRoutingModule,
    RouterModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ]
})
export class DepartmentModule { }
