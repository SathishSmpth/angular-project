import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interface/user.inteface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  user: FormGroup;
  users: any;
  userId!: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.userId = this.route.snapshot.paramMap.get('userId');
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
      this.update(this.user.value);
      this.user.reset();
    } else {
      this.user.markAllAsTouched();
    }
  }

  private update(postData: User) {
    this.http
      .put(`http://localhost:4000/users/update/${this.userId}`, postData)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
