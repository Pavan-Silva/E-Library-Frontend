import { Component } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {TokenStorageService} from "../../../services/auth/token-storage.service";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent {
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {}

  isSuccessful = false;
  isFailed = false;
  isPending = false;

  form: any = {
    email: null,
    password: null
  };

  data: any = {
    accessToken: null,
    refreshToken: null
  }

  onSubmit() {
    const {username , password} = this.form;

    this.isPending = true;

    this.authService.login(username, password).subscribe (
      {
        next: response => {
          this.data.accessToken = response.accessToken;
          this.data.refreshToken = response.refreshToken;

          this.tokenStorage.saveToken(this.data);

          this.isSuccessful = true;
          this.isFailed = false;
          this.isPending = false;

          this.reloadPage();
        },

        error: () => {
          this.isFailed = true;
          this.isSuccessful = false;
          this.isPending = false;
        }
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
