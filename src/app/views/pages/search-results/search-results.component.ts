import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService:BookService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.bookService.search(params['query']).subscribe({
          next: data => {

          }, error: () => {

          }
        })
      }
    )
  }
}
