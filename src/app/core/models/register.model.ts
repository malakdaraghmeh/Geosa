export class RegisterModel {
  constructor(
    public name: string = '',
    public username: string = '',
    public email: string = '',
    public phoneNumber: string = '',
    public password: string = '',
    public userType: number = 1,
    public identityId: string = '',
    public createdAt: string = new Date().toISOString(),
    public modifiedAt: string = new Date().toISOString(),
    public active: boolean = true
  ) {}

  static fromJson(data: any): RegisterModel {
    return new RegisterModel(
      data.name ?? '',
      data.username ?? '',
      data.email ?? '',
      data.phoneNumber ?? '',
      data.password ?? '',
      data.userType ?? 1,
      data.identityId ?? '',
      data.createdAt ?? new Date().toISOString(),
      data.modifiedAt ?? new Date().toISOString(),
      data.active ?? true
    );
  }

  toJson(): any {
    return {
      name: this.name,
      username: this.username,
      email: this.email,
      phoneNumber: this.phoneNumber,
      password: this.password,
      userType: this.userType,
      identityId: this.identityId,
      createdAt: this.createdAt,
      modifiedAt: this.modifiedAt,
      active: this.active,
    };
  }
}
