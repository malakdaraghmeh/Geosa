import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register.model';
import { HttpService } from '../services/api/http.service';
//import { HttpService } from '../services/api/http.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterController {
  private readonly ENDPOINT = 'Users';

  constructor(private httpService: HttpService) {}

  register(data: RegisterModel): Observable<any> {
    return this.httpService.postData<RegisterModel, any>(this.ENDPOINT, data, false);
  }
}
