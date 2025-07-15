export class DeviceModel {
  constructor(
    public id: string = '',
    public deviceName: string = '',
    public model: string = '',
    public ownerName: string = '',
    public serialNumber: number = 0,
  ) {}

  static fromJson(data: any): DeviceModel {
    return new DeviceModel(
      data.id ?? '',
      data.deviceName ?? '',
      data.model ?? '',
      data.ownerName ?? '',
      data.serialNumber ?? 0,
    );
  }

  toJson(): any {
    return {
      id: this.id,
      deviceName: this.deviceName,
      model: this.model,
      ownerName: this.ownerName,
      serialNumber: this.serialNumber,
     
    };
  }
}
