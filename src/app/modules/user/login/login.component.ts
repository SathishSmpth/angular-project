import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../userAuth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginCredential: FormGroup;
  error!: string;
  isLoading = false;

  constructor(private authService: UserAuthService, private router: Router) {
    this.loginCredential = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  handleSubmit() {
    if (this.loginCredential.valid) {
      this.isLoading = true;
      this.authService
        .login(
          this.loginCredential.value.email,
          this.loginCredential.value.password
        )
        .subscribe(
          (res) => {
            this.router.navigate(['/home']);
            this.isLoading = false;
          },
          (error) => {
            this.error = error;
            this.isLoading = false;
          }
        );
    } else {
      this.loginCredential.markAllAsTouched();
    }
  }
}
