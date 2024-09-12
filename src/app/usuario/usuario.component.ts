import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  // Propiedades para el perfil del usuario
  fotoPerfil: File | null = null;
  telefono: string = '';
  pais: string = '';
  ciudad: string = '';
  direccion: string = '';

  // Método para manejar la carga de la foto
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fotoPerfil = file;
    }
  }

  // Método para guardar la información del usuario
  guardarUsuario(): void {
    // Aquí deberías implementar la lógica para guardar la información del usuario
    console.log('Foto de perfil:', this.fotoPerfil);
    console.log('Teléfono:', this.telefono);
    console.log('Ubicación:', { pais: this.pais, ciudad: this.ciudad, direccion: this.direccion });
  }
}
