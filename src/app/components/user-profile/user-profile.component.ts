import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from '../../controllers/userProfileModel/user-profile.model';
import { UserController } from '../../core/controllers/user.controller';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  profileData?: UserProfileModel;
  loading = true;

  constructor(private userController: UserController) {}

  ngOnInit(): void {
    this.userController.getUserProfile().subscribe({
      next: (data) => {
        this.profileData = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('فشل في تحميل الملف الشخصي');
      },
    });
  }
}
