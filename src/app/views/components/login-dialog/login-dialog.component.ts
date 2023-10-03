import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent {
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, private authService: AuthService) {}

  isSuccessful = false;
  isFailed = false;

  form: any = {
    email: null,
    password: null
  };

  onSubmit() {
    const {username , password} = this.form;

    console.log(username, password);

    this.authService.login(username, password).subscribe (
      {
        next: response => console.log(response),
        error: () => this.isFailed = true
      }
    );
  }
}
