import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    console.log('Registro en proceso...');
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    if (this.username && this.password) {
      this.authService.register(this.username, this.password);
      console.log('Registro exitoso');
      
      // Redirigir al componente de login después del registro
      this.router.navigate(['/login']);
    } else {
      console.log('Datos de registro incompletos');
      alert('Por favor, ingresa un nombre de usuario y una contraseña.');
    }
  }
}



