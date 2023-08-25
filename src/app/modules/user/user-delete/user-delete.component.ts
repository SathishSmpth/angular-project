import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.services';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css'],
})
export class UserDeleteComponent {
  userId: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }
  deleteUser() {
    this.userService.deleteUser(this.userId).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/']);
      },
      (err) => {
        alert('Error was Occurred');
      }
    );
  }
}
