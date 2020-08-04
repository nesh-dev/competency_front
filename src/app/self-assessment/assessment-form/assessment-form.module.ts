import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from  '@angular/material/input';
import { MatRadioModule } from  '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule,} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AssessmentFormRoutingModule } from './assessment-form.routing.module'
import { AssessmentService } from '../assessment-form/assessment.service';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import {SharedmoduleModule} from '../../sharedmodule/sharedmodule.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { OrganizationformComponent } from '../competencies/organizationform/organization/organizationform.component';
import { InnovationformComponent } from '../competencies/innovationform/innovation/innovationform.component';
import { InterpersonalCommunicationFormComponent } from '../competencies/interpersonal-communication-form/interpersonal-communication/interpersonal-communication-form.component'
import { CriticalThinkingFormComponent } from '../competencies/critical-thinking-form/critical-thinking/critical-thinking-form.component';
import { BuildingAndManagingRelationshipsFormComponent } from '../competencies/building-and-managing-relationships-form/building-and-managing-relationship/building-and-managing-relationships-form.component';

@NgModule({
  declarations: [AssessmentFormComponent, OrganizationformComponent, InnovationformComponent, InterpersonalCommunicationFormComponent,CriticalThinkingFormComponent,BuildingAndManagingRelationshipsFormComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    AssessmentFormRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    SharedmoduleModule,
    MatSidenavModule
    
  ],
  providers:[AssessmentService],
  bootstrap: []
})
export class AssessmentFormModule { }
