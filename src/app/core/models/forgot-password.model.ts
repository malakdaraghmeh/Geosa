export class ForgotPasswordModel {
  constructor(public email: string = '') {}

  static fromJson(data: any): ForgotPasswordModel {
    return new ForgotPasswordModel(data.email ?? '');
  }

  toJson(): any {
    return { email: this.email };
  }
}
