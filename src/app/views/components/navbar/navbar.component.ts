import { Component } from '@angular/core';
import {HomeComponent} from "../../pages/home/home.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  protected readonly HomeComponent = HomeComponent;
}
