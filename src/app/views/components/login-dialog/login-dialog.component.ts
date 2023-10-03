import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../../services/auth/auth.service";
import {TokenStorageService} from "../../../services/auth/token-storage.service";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent {
  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              private authService: AuthService,
              private tokenStorage: TokenStorageService) {}

  isSuccessful = false;
  isFailed = false;
  isPending = false;

  form: any = {
    email: null,
    password: null
  };

  onSubmit() {
    const {username , password} = this.form;

    this.isPending = true;

    this.authService.login(username, password).subscribe (
      {
        next: response => {
          //this.tokenStorage.saveToken(response.accessToken, response.refreshToken);
          this.isSuccessful = true;
          this.isFailed = false;
          this.isPending = false;
        },

        error: () => {
          this.isFailed = true;
          this.isSuccessful = false;
          this.isPending = false;
        }
      }
    );
  }
}
