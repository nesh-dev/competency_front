import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-reportee-form',
  templateUrl: './add-reportee-form.component.html',
  styleUrls: ['./add-reportee-form.component.css']
})
export class AddReporteeFormComponent implements OnInit {

  constructor() { }
  
  onSubmit(data){
    console.warn(data)
  }
  
  ngOnInit(): void {
  }

}
