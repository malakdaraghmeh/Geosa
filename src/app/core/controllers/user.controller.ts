import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/api/http.service';
import { UserProfileModel } from '../../controllers/userProfileModel/user-profile.model';


@Injectable({
  providedIn: 'root',
})
export class UserController {
  private readonly ENDPOINT = 'Users/Profile'; 

  constructor(private http: HttpService) {}

  getUserProfile(): Observable<UserProfileModel> {
    return this.http.getData<UserProfileModel>(this.ENDPOINT, true);
  }
}
