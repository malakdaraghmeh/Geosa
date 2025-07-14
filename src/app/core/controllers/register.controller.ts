import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';
import { RegisterModel } from '../models/register.model';

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
