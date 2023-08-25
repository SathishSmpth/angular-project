import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllUsers } from 'src/app/interface/user.inteface';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent {
  users!: AllUsers;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<AllUsers>('http://localhost:4000/users').subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });
  }
}
