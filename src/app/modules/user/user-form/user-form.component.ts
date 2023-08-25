import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { User } from 'src/app/interface/user.inteface';
import { UserService } from 'src/app/services/user.services';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user: FormGroup;
  @Input() title!: string;
  @Output() userDetails = new EventEmitter<User>();

  constructor(private userService:UserService) {
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
     this.userService.userDetails.emit(this.user.value)
     this.userService.handleSubmit.next('handleSubmit')
      this.user.reset();
    } else {
      this.user.markAllAsTouched();
    }
  }
}
