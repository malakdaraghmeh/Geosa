import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/api/http.service';
import { DeviceModel } from '../models/add-device-model';

@Injectable({
  providedIn: 'root',
})
export class AddDeviceController {
  private readonly baseUrl = ''; 

  constructor(private http: HttpService) {}

  addDevice(device: DeviceModel): Observable<any> {
    return this.http.postData<DeviceModel, any>(`${this.baseUrl}`, device);
  }
}
