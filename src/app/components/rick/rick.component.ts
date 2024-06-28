import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.css']
})
export class RickComponent implements OnInit {
  listaPersonajes: any[] = [];
  nextPage: string = '';
  prevPage: string = '';
  searchTerm: string = ''; // Añadido para almacenar el término de búsqueda

  constructor(
    private rickService: RickAndMortyService
  ) { }

  ngOnInit(): void {
    this.buscoPersonajes();
  }

  buscoPersonajes() {
    this.rickService.obtenerPersonajes().subscribe((data) => {
      this.actualizaPropiedades(data);
      console.log(data);
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

  actualizaPropiedades(data: any) {
    this.listaPersonajes = data.results;
    this.nextPage = data.info.next;
    this.nextPage = '?' + this.nextPage.split('?')[1];
    if (data.info.prev != null) {
      this.prevPage = data.info.prev;
      this.prevPage = '?' + this.prevPage.split('?')[1];
    }
  }
}
