import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../services/vuelos.service'; // Asegúrate de que el nombre del archivo sea correcto

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {
  vuelos: any[] = [];

  constructor(private vuelosService: VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.getVuelos().subscribe(data => {
      this.vuelos = data;
    }, error => {
      console.error('Error al obtener vuelos', error);
    });
  }
}
