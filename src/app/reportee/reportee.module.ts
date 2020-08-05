import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReporteeFormComponent } from './add-reportee-form/add-reportee-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ReporteeRoutingModule} from './reportee.routing.module';
import { RouterModule} from '@angular/router';
import {SharedmoduleModule} from '../sharedmodule/sharedmodule.module';
import {AuthService} from '../services/auth/auth.service';
import {ManagereporteeService} from '../services/auth/managereportee.service';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatRadioModule } from  '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [AddReporteeFormComponent],
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
    ReporteeRoutingModule,
    RouterModule,
    MatSidenavModule,
    SharedmoduleModule,
    
  ],
  providers: [AuthService, ManagereporteeService],
})
export class ReporteeModule { }
