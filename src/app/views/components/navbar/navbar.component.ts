import {Component} from '@angular/core';
import {HomeComponent} from "../../pages/home/home.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  protected readonly HomeComponent = HomeComponent;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginDialogComponent);
  }
}
