import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserAuthService } from 'src/app/services/userAuth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  private userSub!: Subscription;
  constructor(private authService: UserAuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  logout() {
    this.authService.logout();
  }
}
