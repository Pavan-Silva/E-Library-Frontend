import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {Book} from "../../../dto/book";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bookList: Book[] =[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBookList().subscribe (
      data => {
        this.bookList = data;
      }
    );
  }
}
