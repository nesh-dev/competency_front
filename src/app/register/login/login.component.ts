import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";
import { AuthService } from '../../services/auth/auth.service';
import { SnackBarService } from '../../services/snackBar/snackbar.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup; 
  loading: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private SnackBarService: SnackBarService, 
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }


  login():void {
    if(this.form.valid){
      const formData = {
      user_name: this.form.get("username").value,
      password: this.form.get("password").value,
      
      }
      this.loading = true;
      this.AuthService.loginUser(formData).subscribe(
        (response) => {
          this.loading = false
          this.SnackBarService.showSuccessSnackBar('welcome to the competency app')
          this.Router.navigate([''])
        },
        (error) => {
    
          this.loading = false; 
          this.SnackBarService.showErrorSnackBar(error.error.non_field_errors[0])
        }
      );
    }else {
      this.SnackBarService.showErrorSnackBar('Form inputs not valid')
    }
  }

}
