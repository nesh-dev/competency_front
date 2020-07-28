import { Component, OnInit, Inject } from '@angular/core';
import { ProfileService } from '../../services/profile/profile.service';
import { Router } from "@angular/router";
import { UserProfile } from "../../interfaces/user-profile";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user: UserProfile;

  public editEnabled = true;
  public picurl: string;

  constructor(private profileService: ProfileService, private router: Router) { }

  onSubmit() {
    this.profileService.setUserProfile(this.user);
    this.router.navigate(["profile"]);
  }

  ngOnInit() {
    this.user = this.profileService.getUserProfile();
  }
}