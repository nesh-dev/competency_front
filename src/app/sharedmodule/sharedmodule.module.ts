import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent} from '../sidebar/sidebar.component';
import {SettingsService} from '../services/settings.services';
import { RouterModule } from '@angular/router';


// import { SidebarRoutingModule} from '../sidebar/sidebar-routes.config';




@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,  
    RouterModule,
  ],
  exports: [
    SidebarComponent,  
  ],
  
  providers: [
    SettingsService,
  ]
})
export class SharedmoduleModule { }
