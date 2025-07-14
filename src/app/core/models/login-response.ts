import { BaseResponse } from "./base-response";

export interface LoginResponse extends BaseResponse {
    token: string;
    expiresOn: string;
    roles: string[];
  }
  