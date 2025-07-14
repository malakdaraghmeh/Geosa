import { LoginResponse } from "../../models/login-response";


export const AuthStorage = {
  saveLoginData(data: LoginResponse) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("expireOn", data.expiresOn);
    localStorage.setItem("roles", JSON.stringify(data.roles));
  },

  clear() {
    localStorage.clear();
  },

  getToken() {
    return localStorage.getItem("token");
  },

  getRoles(): string[] {
    const roles = localStorage.getItem("roles");
    return roles ? JSON.parse(roles) : [];
  },

  getUserName(): string | null {
    return localStorage.getItem("username");
  }
};
