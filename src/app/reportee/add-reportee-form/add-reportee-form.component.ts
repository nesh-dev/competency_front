import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";
import { AuthService } from '../../services/auth/auth.service';
import {ManagereporteeService} from '../../services/auth/managereportee.service';
import { SnackBarService } from '../../services/snackBar/snackbar.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reportee-form',
  templateUrl: './add-reportee-form.component.html',
  styleUrls: ['./add-reportee-form.component.css']
})
export class AddReporteeFormComponent implements OnInit {

  opened = true;
  
  form: FormGroup; 
  loading: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private ManagereporteeService: ManagereporteeService,
    private SnackBarService: SnackBarService, 
    private Router: Router
  ) { }
  
  onSubmit(data){
    console.warn(data)
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      reporteeName: ["", [Validators.required]],
      username: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  checkForFieldErrors(error, formData){
    const fields = Object.keys(formData)
    fields.map((item) => {
      if (error.error[item]!== undefined && error.error[item].length > 0){
        this.SnackBarService.showErrorSnackBar(error.error[item][0])
      }
    })
  }

  addReportee():void {
    if(this.form.valid){
      const formData = {
      user_name: this.form.get("username").value,
      email: this.form.get("email").value,
      password:'moringa',
      confirm_password: 'moringa',
      is_reportee: true,
      
      }
      this.loading = true;

      this.ManagereporteeService.addReportee(formData).subscribe(
        (response) => {
          this.loading = false
          this.SnackBarService.showSuccessSnackBar('You Have Successfully Registered a Reportee')
          
        },
        (error) => {
          console.log(error,"potato")
          this.loading = false; 
          this.checkForFieldErrors(error, formData)
        }
      );
    }else {
      this.SnackBarService.showErrorSnackBar('Form inputs not valid')
    }
  }

}

