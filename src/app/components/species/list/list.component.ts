import { Species } from './../../../models/species';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listaEspecies: Species[] = [];
  @Output() especieEmmiter = new EventEmitter();
  @Output() paginadorEmmiter = new EventEmitter();
  @Input() total: number;
  @Input() siguiente: number;
  @Input() anterior: number;
  @Input() paginasFaltantes: number;
  paginaActual: number;
  constructor() { }

  ngOnInit() {
    this.paginaActual = 1;
  }

  irEspecie(especie: Species) {
    this.especieEmmiter.emit(especie);
  }
  paginador(pagina: number) {
    this.paginaActual = pagina;
    this.paginadorEmmiter.emit(pagina);
  }
 

}
