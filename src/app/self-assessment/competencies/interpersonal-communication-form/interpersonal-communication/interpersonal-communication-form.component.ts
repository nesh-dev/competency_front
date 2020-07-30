import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-interpersonal-communication-form',
  templateUrl: './interpersonal-communication-form.component.html',
  styleUrls: ['./interpersonal-communication-form.component.css']
})
export class InterpersonalCommunicationFormComponent implements OnInit {
  @Input() assessmentForm: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
