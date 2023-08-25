import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AllUsers } from 'src/app/interface/user.inteface';
import { UserService } from 'src/app/services/user.services';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
})
export class UserComponent {
  users!: AllUsers;
  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUser().subscribe((res) => {
      this.users = res;
    },error=>{
      alert("Error was Occurred")
    });
    // this.http.get<AllUsers>('http://localhost:4000/users').subscribe((res) => {
    //   this.users = res;
    //   console.log(this.users);
    // });
  }
}
