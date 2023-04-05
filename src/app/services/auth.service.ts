import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  login(email_user: string, password: string) {
    return this.http.post<any>('http://localhost:3001/login', { email_user, password });
  }

  logout() {
    localStorage.removeItem('User');
  }

  isLoggedIn() {
    if(localStorage.getItem('User') === null){
      return false;
    }else{
      return true;      
    }
  }
}
