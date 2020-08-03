import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from "@angular/forms";
import { AuthService } from '../../services/auth/auth.service';
import { SnackBarService } from '../../services/snackBar/snackbar.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
      username: ["",[Validators.required]],
      email: ["", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      password: ["", Validators.required],
      confirm_password: ["", Validators.required]
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


  register():void {
    if(this.form.valid){
      const formData = {
      email: this.form.get("email").value,
      password: this.form.get("password").value,
      user_name: this.form.get("username").value,
      confirm_password : this.form.get("confirm_password").value
      
      }
      this.loading = true;
      this.AuthService.register(formData).subscribe(
        (response) => {
          this.loading = false
          this.SnackBarService.showSuccessSnackBar('welcome to the competency app')
          this.Router.navigate(['/login'])
        },
        (error) => {
          this.loading = false; 
          this.checkForFieldErrors(error, formData)
        }
      );
    }else {
      this.SnackBarService.showErrorSnackBar('Form inputs not valid')
    }
  }



}
