import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  txtSearch = '';

  constructor(public dialog: MatDialog, private router:Router) {}

  openDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  search() {
    if (this.txtSearch != '') {
      this.router.navigate(['/search'],{queryParams: {query: this.txtSearch}});
    }
  }
}
