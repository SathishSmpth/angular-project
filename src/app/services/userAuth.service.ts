import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, User } from '../interface/user.interface';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserAuthService {
  user = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient,private router:Router) {}

  signUp(signUpData: User) {
    return this.http
      .post<AuthResponse>('https://node-by2j.onrender.com/api/v1/auth/signup', {
        email: signUpData.email,
        username: signUpData.username,
        phone: signUpData.phone,
        password: signUpData.password,
        confirmPassword: signUpData.confirmPassword,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => this.handleAuthentication(resData))
      );
  }
  login(email: string, password: string) {
    return this.http
      .post<AuthResponse>('https://node-by2j.onrender.com/api/v1/auth/login', {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => this.handleAuthentication(resData))
      );
  }
  autoLogin() {
    const userData: any = localStorage.getItem('userData');
    if (!userData) {
      return;
    }
    const userDetails:AuthResponse = JSON.parse(userData);

    if (userDetails.token) {
      this.user.next(userDetails);
    }
    this.router.navigate(['/home']);
  }
  logout() {
    this.user.next(null);
    this.router.navigate(['/auth/login'])
    localStorage.removeItem('userData');
  }
  private handleAuthentication(resData: AuthResponse) {
    this.user.next(resData);
    localStorage.setItem('userData', JSON.stringify(resData));
  }
  private handleError(errorRes: HttpErrorResponse) {
    if (errorRes.error) {
      return throwError(errorRes.error.message);
    } else {
      return throwError('An unknown error occurred');
    }
  }
}
