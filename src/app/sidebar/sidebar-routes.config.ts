// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { SidebarComponent } from './sidebar.component';

// const sidebarRoutes: Routes = [
//     {path: 'pending'},
//     {path: '/dashboard'},
//     {path: 'profile'},
//     {path: 'assessment'},
//     {path: 'reportee'},
//     {path: 'period'},

//     {component: SidebarComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forChild(sidebarRoutes)],
//   exports: [RouterModule]
// })
// export class SidebarRoutingModule { }

export const ROUTES = [
    { path: '/supervisor-dash',  title: 'Dashboard', icon: 'dashboard', children: null },
    { path: '/update-profile', title: 'User Profile', icon: 'person', children: null },
    { path: '/create-department',  title: 'Department', icon: 'edit', children: null },
    { path: '/view-reviews',  title: 'Reviews', icon: 'date_range', children: null },
    { path: '/view-roles',  title: 'Roles', icon: 'person', children: null },
    { path: '/assessment', title: 'Assessments', icon: 'edit', children: null },
    { path: 'period', title: 'Assessment Period', icon: 'date_range', children: null },
    { path: 'pending', title: 'Pending Assessments', icon: 'edit', children: null },
    { path: 'reportee', title: 'Reportees', icon: 'person', children: null },
  
    
];
