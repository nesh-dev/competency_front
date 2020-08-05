
export const ROUTES = [

    { path: '',  title: 'Dashboard', icon: 'dashboard', children: null, onlyVisibleTo: ['supervisor', 'reportee', 'manager'] },
    { path: '/update-profile', title: 'User Profile', icon: 'person', children: null, onlyVisibleTo: ['supervisor', 'reportee', 'manager'] },
    { path: '/create-department',  title: 'Department', icon: 'edit', children: null , onlyVisibleTo: ['supervisor',]},
    { path: '/add-manager',  title: 'Manager', icon: 'person', children: null, onlyVisibleTo: ['supervisor',]  },
    { path: '/add-reportee', title: 'Reportees', icon: 'person', children: null, onlyVisibleTo: ['manager'] },
    { path: '/view-reviews',  title: 'Reviews', icon: 'date_range', children: null, onlyVisibleTo: ['supervisor', 'reportee', 'manager'] },
    { path: '/view-roles',  title: 'Roles', icon: 'person', children: null, onlyVisibleTo: ['supervisor',] },
    { path: '/assessment', title: 'Assessments', icon: 'edit', children: null, onlyVisibleTo: ['supervisor', 'reportee', 'manager'] },
       
];
