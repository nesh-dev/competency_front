import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {

  opened = true;

  constructor() { }

  ngOnInit(): void {
  }

}
