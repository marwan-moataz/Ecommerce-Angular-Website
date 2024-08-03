import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  sendData(loginForm: any) {
    console.log(loginForm);
    if (
      loginForm.controls['username'].valid &&
      loginForm.controls['password'].valid
    ) {
      alert('welcome');
    }
  }
}
