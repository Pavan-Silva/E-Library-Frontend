import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const auth_url = "http://localhost:8080/api/auth/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(auth_url + 'login', {
      email,
      password
    }, httpOptions);
  }

  register(firstName: string, lastName: string, mobile: string, username: string, email: string, password: string): Observable<any> {
    return this.http.post(auth_url + 'register', {
      firstName,
      lastName,
      mobile,
      username,
      email,
      password
    }, httpOptions);
  }

  refreshToken(token: string) {
    return this.http.post(auth_url + 'refresh', {
      refreshToken: token
    }, httpOptions);
  }
}
