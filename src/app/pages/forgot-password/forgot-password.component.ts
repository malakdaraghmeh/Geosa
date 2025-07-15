import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ForgotPasswordController } from '../../core/controllers/forgot-password.controller';
import { ForgotPasswordModel } from '../../core/models/forgot-password.model';
import { ToastrService } from 'ngx-toastr';
import { AuthLayoutComponent } from '../../shared/auth-layout/auth-layout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule, AuthLayoutComponent],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  standalone: true,
})
export class ForgotPasswordComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private forgotPasswordController: ForgotPasswordController,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.toastr.error('يرجى إدخال بريد إلكتروني صالح.');
      return;
    }

    this.loading = true;
    const model = new ForgotPasswordModel(this.form.value.email);

    this.forgotPasswordController.sendResetEmail(model).subscribe({
      next: () => {
        this.toastr.success(
          'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.'
        );
        this.form.reset();
      },
      error: () => {
        this.toastr.error('حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  onSwitchTabHandler = (tab: 'login' | 'nafath') => {
    switch (tab) {
      case 'login':
        this.router.navigate(['/login']);
        break;
      case 'nafath':
        this.router.navigate(['/nafath-login']);
        break;
    }
  };
}
