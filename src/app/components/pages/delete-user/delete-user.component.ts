import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  userId: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }
  deleteUser() {
    this.http
      .delete(`http://localhost:4000/users/delete/${this.userId}`)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/']);
      });
  }
}
