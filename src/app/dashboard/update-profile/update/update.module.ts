import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedmoduleModule} from '../../../sharedmodule/sharedmodule.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {UpdateProfileComponent} from '../update-profile.component';



@NgModule({
  declarations: [UpdateProfileComponent],
  imports: [
    CommonModule,
    SharedmoduleModule,
    MatSidenavModule,
  ]
})
export class UpdateModule { }
