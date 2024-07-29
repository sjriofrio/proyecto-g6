
import { Component, Output,  EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() loginEvent = new EventEmitter<boolean>();

  constructor(public authService: AuthService, private router: Router) {}

  username: string = '';
  password: string = '';
  loginMessage: string = '';

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    const isLoggedIn = this.authService.login(this.username, this.password);
    if (isLoggedIn) {
      console.log('Autenticación exitosa!');
      this.router.navigate(['/nav']);
      this.loginEvent.emit(true);
    } else {
      console.error('Error autenticando');
      this.loginMessage = 'Usuario no registrado o contraseña incorrecta';
    }
  }
}
