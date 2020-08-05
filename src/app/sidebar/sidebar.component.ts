import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.services';
import { AuthService } from '../services/auth/auth.service';
// import { SidebarRoutingModule} from './sidebar-routes.config';
import { ROUTES} from './sidebar-routes.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  public color: string;
  public menuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;
  currentUser: any;
  public role: object;
  public filteredRoutes: object;
  constructor(public settingsService: SettingsService, private router: Router,private AuthService: AuthService) {
    this.menuItems = ROUTES;
    this.activeFontColor = 'rgba(0,0,0,.6)';
    this.normalFontColor = 'rgba(255,255,255,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
  }
  isLinkVisible = (linkItem, userRole) => {
    const { onlyVisibleTo } = linkItem;
    let hasPermission;
    if (onlyVisibleTo) {
      hasPermission =
        userRole && userRole.some(role => onlyVisibleTo.includes(role));
    }
    const showItem = !onlyVisibleTo || hasPermission;
    return showItem;
  };
  filterRoles(userRole, items) {
    const routes = items.map((dropdownItem, index) => {
      const showItem = this.isLinkVisible(dropdownItem, userRole);
      return showItem ? dropdownItem : null;
    });
    return routes.filter(item => item !== null);
  }
  ngOnInit() {
    this.role = [this.AuthService.getRole()]
    console.log(this.role, "carrot")
    this.filteredRoutes = this.filterRoles(this.role, this.menuItems )
    this.color = this.settingsService.getSidebarFilter();
    this.settingsService.sidebarFilterUpdate.subscribe((filter: string) => {
      this.color = filter;
      if (filter === '#fff') {
        this.activeFontColor = 'rgba(0,0,0,.6)';
      }
      else {
        this.activeFontColor = 'rgba(255,255,255,.8)';
      }
    });
    this.settingsService.sidebarColorUpdate.subscribe((color: string) => {
      if (color === '#fff') {
        this.normalFontColor = 'rgba(0,0,0,.6)';
        this.dividerBgColor = 'rgba(0,0,0,.1)';
      }
      else {
        this.normalFontColor = 'rgba(255,255,255,.8)';
        this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
      }
    });
  }  
}