import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddManagerFormComponent } from './add-manager-form/add-manager-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ManagerRoutingModule} from './manager.routing.module';
import { RouterModule} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {ManagereporteeService} from '../services/auth/managereportee.service';

import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatRadioModule } from  '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SharedmoduleModule} from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [AddManagerFormComponent],
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
    ManagerRoutingModule,
    RouterModule,
    SharedmoduleModule,
    MatSidenavModule,
  ],
  providers: [AuthService, ManagereporteeService],
})
export class ManagerModule { }
