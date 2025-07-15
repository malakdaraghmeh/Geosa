export class LoginModel {
    constructor(
      public username: string,
      public password: string
    ) {}
  
    static fromJson(data: any): LoginModel {
      return new LoginModel(
        data["username"] ?? '',
        data["password"] ?? ''
      );
    }
  }
  