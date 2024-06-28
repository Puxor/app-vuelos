import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.css']
})
export class RickComponent implements OnInit {
  listaPersonajes: any[] = [];
  selectedCharacter: any | null = null;
  nextPage: string = '';
  prevPage: string = '';
  searchTerm: string = ''; 

  constructor(
    private rickService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.buscoPersonajes();
  }

  buscoPersonajes() {
    this.rickService.obtenerPersonajes().subscribe((data) => {
      this.actualizaPropiedades(data);
    });
  }

  irA(pagina: string) {
    this.rickService.irAPagina(pagina).subscribe(data => {
      this.actualizaPropiedades(data);
    });
  }

  buscarPersonajes() {
    if (this.searchTerm) {
      this.rickService.buscarPersonajes(this.searchTerm).subscribe(data => {
        this.actualizaPropiedades(data);
      });
    } else {
      this.buscoPersonajes();
    }
  }

  selectCharacter(character: any): void {
    if (this.selectedCharacter === character) {
      this.selectedCharacter = null; 
    } else {
      this.selectedCharacter = character; 
    }
  }

  actualizaPropiedades(data: any) {
    this.listaPersonajes = data.results;
    this.nextPage = data.info.next ? '?' + data.info.next.split('?')[1] : '';
    this.prevPage = data.info.prev ? '?' + data.info.prev.split('?')[1] : '';
  }
}
