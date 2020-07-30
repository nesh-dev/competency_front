import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from  '@angular/material/input';
import { MatRadioModule } from  '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule,} from '@angular/material/toolbar';

import { InterpersonalCommunicationFormComponent } from './interpersonal-communication/interpersonal-communication-form.component';


@NgModule({
  declarations: [InterpersonalCommunicationFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class InterpersonalCommunicationFormModule { }
