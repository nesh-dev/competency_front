import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent  } from './sidebar/sidebar.component'

const sidebarRoutes: Routes = [
  {
      path: 'sidebar',
      component: SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(sidebarRoutes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
