import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { LoginComponent } from './login/login.component';
import { UserAuthGuard } from './user.guard';

const routes: Routes = [
  { path: '', component: UserComponent, canActivate: [UserAuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'update/:userId',
    component: UserUpdateComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'delete/:userId',
    component: UserDeleteComponent,
    canActivate: [UserAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
