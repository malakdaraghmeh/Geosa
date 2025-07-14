import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterController } from '../../core/controllers/register.controller';
import { RegisterModel } from '../../core/models/register.model';
import { REGISTER_FIELDS } from '../../core/forms/register-form.config';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  fields = REGISTER_FIELDS;

  constructor(
    private fb: FormBuilder,
    private registerController: RegisterController
  ) {}

  ngOnInit(): void {
    const group: any = {};
    REGISTER_FIELDS.forEach((field) => {
      group[field.id] = [
        field.type === 'checkbox' ? field.value ?? false : field.value ?? '',
        field.required ? Validators.required : [],
      ];
    });
    this.registerForm = this.fb.group(group);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formValue = this.registerForm.value;

    formValue.createdAt = new Date(formValue.createdAt).toISOString();
    formValue.modifiedAt = new Date(formValue.modifiedAt).toISOString();

    const registerData = RegisterModel.fromJson(formValue);

    this.registerController.register(registerData).subscribe({
      next: (res) => {
        console.log('Registration success:', res);
      },
      error: (err) => {
        console.error('Registration error:', err);
      },
    });
  }
}
