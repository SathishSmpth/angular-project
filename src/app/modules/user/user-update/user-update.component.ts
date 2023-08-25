import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user.inteface';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent {
  userId: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  handleSubmit(userDetails: User) {
    this.update(userDetails);
  }

  private update(updateData: User) {
    this.http
      .put(`http://localhost:4000/users/update/${this.userId}`, updateData)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
