import { Injectable } from '@angular/core';
import { UserProfile } from "../../interfaces/user-profile";
import{ Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private user: UserProfile = {
    name: "Rose Kairu",
    email: "rosekairu@gmail.com",
    bio: "I am currently...",
    contact: 0,
  };

  getUserProfile() {
    return this.user;
  }

  setUserProfile(user: UserProfile) {
    this.user = user;
    // this.router.navigate(["profile"]);
  }

  constructor(private router: Router) {}
}
