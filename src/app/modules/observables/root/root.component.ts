import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserObsService } from '../user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub!: Subscription;

  constructor(private userService: UserObsService) {}

  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (didActivate) => {
        this.userActivated = didActivate;
      }
    );
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
