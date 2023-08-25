import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, User } from './user.interface';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { NewUser } from './user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserAuthService {
  user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient,private router:Router) {}

  signUp(signUpData: User) {
    return this.http
      .post<AuthResponse>('http://localhost:4000/users/sign-up', {
        email: signUpData.email,
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        gender: signUpData.gender,
        dob: signUpData.dob,
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
      .post<AuthResponse>('http://localhost:4000/users/login', {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => this.handleAuthentication(resData))
      );
  }
  logout() {
    this.user.next(null);
    this.router.navigate(['/users/login'])
    localStorage.removeItem('userData');
  }
  private handleAuthentication(resData: AuthResponse) {
    const expiresIn = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
    const userData = new NewUser(resData.token, expiresIn);
    this.user.next(userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);

    if (errorRes.error) {
      return throwError(errorRes.error.message);
    } else {
      return throwError('An unknown error occurred');
    }
  }
}
