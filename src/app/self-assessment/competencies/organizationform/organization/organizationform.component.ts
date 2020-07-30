import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-organizationform',
  templateUrl: './organizationform.component.html',
  styleUrls: ['./organizationform.component.css']
})
export class OrganizationformComponent implements OnInit {
  @Input() assessmentForm: FormGroup;
  

  constructor() { }

  ngOnInit(): void {
  }

}
