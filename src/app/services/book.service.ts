import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const API_URL = 'http://localhost:8080/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookList(): Observable<any> {
    return this.http.get(API_URL);
  }

  getBookById(id: number): Observable<any> {
    return this.http.get(API_URL + '/' + id);
  }

  search(query:string): Observable<any> {
    return this.http.get(API_URL + '/search?query=' + query);
  }
}
