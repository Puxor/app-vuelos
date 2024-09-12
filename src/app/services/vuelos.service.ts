import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  private apiUrl = 'http://localhost:3000/api/vuelos'; // URL de tu backend Express

  constructor(private http: HttpClient) { }

  getVuelos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getVuelo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}

