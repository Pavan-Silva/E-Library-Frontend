import { Injectable } from '@angular/core';

const token_key= "auth-token";
const refresh_token_key= "refresh-token";
const user_key= "auth-user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signout() {
    window.sessionStorage.clear();
  }

  public saveToken(data: any) {
    window.sessionStorage.removeItem(token_key);
    window.sessionStorage.removeItem(refresh_token_key);

    window.sessionStorage.setItem(token_key,data.accessToken);
    window.sessionStorage.setItem(refresh_token_key,data.refreshToken);
  }

  public getToken() {
    return window.sessionStorage.getItem(token_key);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(user_key);
    window.sessionStorage.setItem(user_key, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(user_key);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
