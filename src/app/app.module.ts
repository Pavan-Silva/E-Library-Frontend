import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgOptimizedImage} from "@angular/common";
import {MatMenuModule} from "@angular/material/menu";
import { HomeComponent } from './views/pages/home/home.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from "./views/components/navbar/navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import { LoginDialogComponent } from './views/components/login-dialog/login-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SearchResultsComponent } from './views/pages/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginDialogComponent,
    SearchResultsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        NgOptimizedImage,
        MatMenuModule,
        MatGridListModule,
        MatInputModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatDialogModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
