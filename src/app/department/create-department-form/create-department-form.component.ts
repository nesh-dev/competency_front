import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DepartmentModule } from '../department.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from '../create-department.model';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { CreateDepartmentService } from '../create-department.service';


@Component({
  selector: 'app-create-department-form',
  templateUrl: './create-department-form.component.html',
  styleUrls: ['./create-department-form.component.css'],
  // providers: [ApiService]

})
export class CreateDepartmentFormComponent implements OnInit {

  departments: Department[];
  form: FormGroup;
  loading = false;
  CreateDepartmentService:CreateDepartmentService;



  constructor(
    private formBuilder: FormBuilder,
    private Router: Router,
  ) {

   }

   onSubmit(data){
    console.warn(data);
  }

ngOnInit(): void {
    this.form = this.formBuilder.group({
      departmentname: ['', [Validators.required]],
      departmentcode: ['', [ Validators.required]],
      assignManager:  ['', [Validators.required]]
    });
  }
  createdepartment(): void{
    if (this.form.valid){
      const formData = {
      departmentname: this.form.get('departmentname').value,
      departmentcode: this.form.get('departmentcode').value,
      assignManager: this.form.get('assignManager').value,

      };




}

// this.loading = true;
//     this.departments(FormData).subscribe(
//     (response) => {
//       this.loading = false;
//       this.Router.navigate(['']);

// },
}
}
