import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse, User } from './user.interface';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  take,
  tap,
  throwError,
} from 'rxjs';
import { Router, UrlTree } from '@angular/router';
import { UserAuthService } from './userAuth.service';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserAuthGuard {
  constructor(private authService: UserAuthService, private router: Router) {}

  CanActivateFn(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        const authUser = !!user;
        if (authUser) {
          return true;
        } else {
          return this.router.createUrlTree(['/']);
        }
      })
    );
  }
}
