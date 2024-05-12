import { Component } from '@angular/core';
import { MyService } from '../MyService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isTokenExpired: boolean = false;

  constructor(private myService: MyService) { }
  isAuthentif() {
    this.isTokenExpired = this.myService.tokenExpired();
  }
  SignOut() {
    this.myService.logOut();
  }
  ngOnInit() {
    this.isAuthentif();
  }
}
