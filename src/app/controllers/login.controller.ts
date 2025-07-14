import { LoginResponse } from "../core/models/login-response";
import { LoginModel } from "../core/models/loginModel/login.model";
import { HttpService } from "../core/services/api/http.service";
import { firstValueFrom } from 'rxjs';
import { AuthStorage } from "../core/services/auth/auth-storage.service";

export class LoginController {
  constructor(private http: HttpService) {}

  async login(data: LoginModel): Promise<LoginResponse> {
    try {
      const response = await firstValueFrom(
        this.http.postData<LoginModel, LoginResponse>('Users/login', data, false)
      );

      if (response && response.token) {
        AuthStorage.saveLoginData(response);
      }

      return response;
    } catch (error: any) {
      console.error('Login failed:', error);

      return {
        message: error?.message || 'Login failed',
        statusCode: error?.statusCode || 500,
        token: '',
        roles: [],
        expiresOn: ''
      };
    }
  }
}
