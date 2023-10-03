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
  isFailed= false;
  isPending = true;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBookList().subscribe ({
      next: data => {
        this.bookList = data.slice(0,7);
        this.isPending = false;

      }, error: () => {
        this.isFailed = true;
        this.isPending = false;
      }
    });
  }
}
