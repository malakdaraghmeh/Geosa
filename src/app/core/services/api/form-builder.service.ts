// src/app/form-json/services/form-builder.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormField } from '../../models/formFileds/form-field.model';


@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private http: HttpClient) {}

  getLoginForm(): Observable<FormField[]> {
    return this.http.get<FormField[]>('assets/form-json/data/login-form.json');
  }
}
