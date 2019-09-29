import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() buscarEmmiter = new EventEmitter();
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFormulario();
  }

  buscar() {
    if (this.searchForm.valid) {
      let nombre = this.searchForm.value;
      nombre = nombre.nombre;
      this.buscarEmmiter.emit(nombre);
    }
  }

  initFormulario() {
    this.searchForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.min(2)]]
    });
  }
}
