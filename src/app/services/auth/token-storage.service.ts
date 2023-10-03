import { Injectable } from '@angular/core';

const token_key= "auth-token";
const user_key= "auth-user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signout() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(token_key);
    window.sessionStorage.setItem(token_key,token);
  }

  public getToken() {
    return window.sessionStorage.getItem(token_key);
  }
}
