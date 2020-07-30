import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-innovationform',
  templateUrl: './innovationform.component.html',
  styleUrls: ['./innovationform.component.css']
})
export class InnovationformComponent implements OnInit {
  @Input() assessmentForm: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
