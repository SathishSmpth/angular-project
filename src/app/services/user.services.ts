import { HttpClient } from '@angular/common/http';
import { AllUsers, User } from '../interface/user.inteface';
import { catchError, map, throwError } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  userDetails = new EventEmitter<User>();
  handleSubmit = new EventEmitter<string>();
  getAllUser() {
    return this.http.get<AllUsers>('http://localhost:4000/users').pipe(
      map((responseData) => responseData),
      catchError((err) => throwError(err))
    );
  }

  signUp(postData: User) {
    return this.http.post<User>('http://localhost:4000/users', postData).pipe(
      map((responseData) => responseData),
      catchError((err) => throwError(err))
    );
  }
  updateUser(postData: User, id: string) {
    return this.http
      .put<User>(`http://localhost:4000/users/update/${id}`, postData)
      .pipe(
        map((responseData) => responseData),
        catchError((err) => throwError(err))
      );
  }
  deleteUser(id: string) {
    return this.http.delete(`http://localhost:4000/users/delete/${id}`).pipe(
      map((responseData) => responseData),
      catchError((err) => throwError(err))
    );
  }
}
