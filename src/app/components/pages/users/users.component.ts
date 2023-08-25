import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AllUsers } from 'src/app/interface/user.inteface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  // users!: AllUsers;
  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.http.get<AllUsers>('http://localhost:4000/users').subscribe((res) => {
  //     this.users = res;
  //   });
  // }
}
