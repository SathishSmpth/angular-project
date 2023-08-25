import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { UserAuthService } from '../userAuth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  user: FormGroup;
  users: any;
  error!: string;
  isLoading = false;

  constructor(private authService: UserAuthService, private router: Router) {
    this.user = new FormGroup(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z -']+"),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z -']+"),
        ]),
        dob: new FormControl('', [Validators.required]),
        phone: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('[0-9]*'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        gender: new FormControl('', [Validators.required]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,50}$/
          ),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: this.matchPassword,
      }
    );
  }

  matchPassword: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let password = group.get('password')?.value;
    let confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { doesNotMatch: true };
  };
  handleSubmit() {
    if (this.user.valid) {
      this.isLoading = true;
      this.authService.signUp(this.user.value).subscribe(
        (res) => {
          this.isLoading = false;
          this.router.navigate(["/users/login"])
        },
        (error) => {
          this.error = error;
          this.isLoading = false;
        }
      );
    } else {
      this.user.markAllAsTouched();
    }
  }
}
