import { Component, OnInit } from '@angular/core';
import { EspeciesService } from '../../services/especies.service';
import { Species } from 'src/app/models/species';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  detalle: boolean;
  listaEspecies: Species[] = [];
  especie: Species;
  total: number;
  siguiente: number;
  anterior: number;
  paginasFaltantes: number;
  constructor(public service: EspeciesService) { }

  ngOnInit() {
    this.loadEspecieList();
  }
  inicializarPaginador() {
    this.siguiente = this.service.paginador.next;
    this.anterior = this.service.paginador.previous;
    this.total = this.service.paginador.counter;
    this.paginasFaltantes = this.service.paginador.missing;
  }

  loadEspecieList(pagina?: string) {
    this.service.loadEspeciesList(pagina).subscribe(data => { this.listaEspecies = data; this.inicializarPaginador(); });
  }

  loadEspecie(nombre: string) {
     this.service.loadEspecie(nombre).subscribe((data: Species) => {
      this.especie = data[0];
      this.detalle = true;
    });
  }

  recibeEspecie(especie: Species) {
    this.detalle = true;
    this.especie = especie;
  }
  recibeVolver(detalle: boolean) {
    this.detalle = detalle;
  }
}
