import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 username: string
 role: string
  constructor(private router: Router, private authservice: AuthService) { }
  
  ngOnInit(): void {
    this.role= this.authservice.getRole()
    
    this.username= this.getUsername()
    
  }
  
getUsername(){
  const userInfo=localStorage.getItem("currentUser")
  if(userInfo) {
    const {user_name}= JSON.parse(userInfo)

    return user_name
  }
}


  onLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
   };
   
  
}
