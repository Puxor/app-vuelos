import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      console.log('Login exitoso');
      this.router.navigate(['/vuelos']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  // Método para redirigir al componente de registro
  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}

