import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddDeviceController } from '../../core/controllers/add-device.controller';
import { DeviceModel } from '../../core/models/add-device-model';
import { ADD_DEVICE_FIELDS } from '../../core/forms/add-device-form.config';

@Component({
  selector: 'app-add-device',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
deviceForm: FormGroup = new FormGroup({});
  fields = ADD_DEVICE_FIELDS;

  constructor(
    private fb: FormBuilder,
    private addDeviceController: AddDeviceController
  ) {}

  ngOnInit(): void {
    this.deviceForm = this.fb.group({});
    this.fields.forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      this.deviceForm.addControl(field.id, this.fb.control(field.value, validators));
    });
  }

  onSubmit(): void {
    if (this.deviceForm.valid) {
      const deviceData: DeviceModel = this.deviceForm.value;
      this.addDeviceController.addDevice(deviceData).subscribe({
        next: res => {
          console.log('Device added successfully:', res);
        },
        error: err => {
          console.error('Error adding device:', err);
        }
      });
    }
  }
}
