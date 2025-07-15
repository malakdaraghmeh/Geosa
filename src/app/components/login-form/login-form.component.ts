import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; // ✅ مهم
import { HttpService } from '../../core/services/api/http.service';
import { LoginController } from '../../controllers/login.controller';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  private loginController: LoginController;

  constructor(private http: HttpService, private router: Router, private toastr: ToastrService ) {
    this.loginController = new LoginController(this.http);
  }

  async onSubmit() {
    const loginData = {
      username: this.username,
      password: this.password,
    };

    const response = await this.loginController.login(loginData);

    if (response.token) {
      this.router.navigate(['/home']).then(() => {
        this.toastr.success('تم تسجيل الدخول بنجاح ✅', 'نجاح');
      });
    } else {
      this.toastr.error(response.message, 'حدث خطأ ❌');
    }
  }
}
