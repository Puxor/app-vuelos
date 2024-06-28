import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

  obtenerPersonajes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  irAPagina(page: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${page}`);
  }


  personajeImagen(page: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${Image}`);
  }

  estatusPersonajes(status: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?status=${status}`);
  }

  locationPersonajes(location: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${location}`);
  }

  speciesPersonajes(species: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${species}`);
  }

  buscarPersonajes(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?name=${name}`);
  }
}
