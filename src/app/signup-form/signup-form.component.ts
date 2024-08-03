import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupFormComponent {
  registerForm!: FormGroup;
  matchPassword!: boolean;
  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}'
        ),
      ]),
      username: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      matchpassword: new FormControl('', [Validators.required]),
    });
  }
  registerSender() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.value.password);
    console.log(this.registerForm.value.matchpassword);
  }
  checkPasswordMatch() {
    if (
      this.registerForm.value.password === this.registerForm.value.matchpassword
    ) {
      this.matchPassword = true;
    } else {
      this.matchPassword = false;
    }
  }
}
