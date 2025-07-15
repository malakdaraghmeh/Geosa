import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/api/http.service';
import { ForgotPasswordModel } from '../models/forgot-password.model';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordController {
  private readonly ENDPOINT = '';

  constructor(private httpService: HttpService) {}

  sendResetEmail(data: ForgotPasswordModel): Observable<any> {
    return this.httpService.postData<ForgotPasswordModel, any>(this.ENDPOINT, data, false);
  }
}
