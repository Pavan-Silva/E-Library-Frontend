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

  public saveToken(token: string, refreshToken:string) {
    window.sessionStorage.removeItem(token_key);
    window.sessionStorage.removeItem(refresh_token_key);
    window.sessionStorage.setItem(token_key,token);
    window.sessionStorage.setItem(refresh_token_key,refreshToken);
  }

  public getToken() {
    return window.sessionStorage.getItem(token_key);
  }
}
