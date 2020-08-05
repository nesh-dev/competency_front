import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent} from '../sidebar/sidebar.component';
import {SettingsService} from '../services/settings.services';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../services/auth/auth.service';



@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,  
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent  
  ],
  
  providers: [
    AuthService,
    SettingsService,
  ]
})
export class SharedmoduleModule { }
