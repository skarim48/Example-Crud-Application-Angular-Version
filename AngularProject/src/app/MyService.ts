import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { TokenService } from './TokenService';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IProduct } from '../../Model/IProduct';
import { IUser } from '../../Model/IUser';


@Injectable({
  providedIn: 'root'
})
export class MyService {
  constructor(private http: HttpClient, private router: Router, private TokenService: TokenService, private jwtHelper: JwtHelperService) { }

  private baseAPI = 'https://localhost:7250';

  private api = `${this.baseAPI}/api`;

  private tokenname = 'jwt';

  invalidLogin?: boolean;

  //Porducts
  createProduct(valueForm: IProduct) {
    let token = localStorage.getItem(this.tokenname);
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const httpHeaders = { headers: headers2 };
    return this.http.post(`${this.api}/Products/apiCreateProducts`, valueForm, httpHeaders)
      .subscribe(
        response => {
          alert('Done');
        }
      );
  }

  deleteProduct(valueForm: IProduct) {
    let token = localStorage.getItem(this.tokenname);
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const httpHeaders = { headers: headers2 };
    console.log(valueForm);
    return this.http.post(`${this.api}/Products/apiDeleteProduct`, valueForm, httpHeaders)
      .subscribe(
        response => {
          alert('Done');
        }
      );
  }

  getProducts(): Observable<IProduct[]> {
    let token = localStorage.getItem(this.tokenname);
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const httpHeaders = { headers: headers2 };

    return this.http.get<IProduct[]>(`${this.api}/Products/apiGetProducts`, httpHeaders);
  }

  editProduct(valueForm: IProduct) {
    let token = localStorage.getItem(this.tokenname);
    const headers2 = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const httpHeaders = { headers: headers2 };
    console.log(valueForm);
    return this.http.post(`${this.api}/Products/apiEditProducts`, valueForm, httpHeaders)
      .subscribe(
        response => {
          alert('Done');
        }
      );
  }

  //Users
  createUser(valueForm: IUser) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.api}/Users/Registration`, valueForm, {
      responseType: 'text'
    })
      .subscribe(
        response => {
          let jsonData = JSON.parse(response);
          let tokenvalue = jsonData["token"];

          localStorage.setItem(this.tokenname, tokenvalue);
          this.invalidLogin = false;
          window.location.reload();
        }
      );
  }

  signin(valueForm: IUser) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.api}/Users/LoginApi`, valueForm, {
      responseType: 'text'
    })
      .subscribe(
        response => {
          let jsonData = JSON.parse(response);
          let tokenvalue = jsonData["token"];

          localStorage.setItem(this.tokenname, tokenvalue);
          this.invalidLogin = false;
          window.location.reload();
        }
      );
  }

  logOut = () => {
    localStorage.removeItem(this.tokenname);
    window.location.reload();
  }

  tokenExpired() {
    let token = localStorage.getItem(this.tokenname);
    return this.jwtHelper.isTokenExpired(token);
  }

}

