import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-department-form',
  templateUrl: './create-department-form.component.html',
  styleUrls: ['./create-department-form.component.css']
})
export class CreateDepartmentFormComponent implements OnInit {

  constructor() { }

  onSubmit(data){
    console.warn(data)
  }

  ngOnInit(): void {
  }

}
