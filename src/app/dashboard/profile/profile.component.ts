import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { UserProfile } from "../../interfaces/user-profile";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserProfile;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.user = this.profileService.getUserProfile();
  }

}
