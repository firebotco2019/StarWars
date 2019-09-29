import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Species } from '../models/species';
import { URI_SWAPI } from '../const/uriConsumo';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EspeciesService {
  private getEspeciesUrl: string;
  private next: number;
  private previous: number;
  private counter: number;
  paginador: any = {};
  constructor(private http: HttpClient) {
    this.getEspeciesUrl = URI_SWAPI.get_species;
  }

  loadEspeciesList(pagina: string): Observable<Species[]> {
    const URI = pagina === undefined || pagina === null ? this.getEspeciesUrl : `${this.getEspeciesUrl}?page=${pagina}`;
    return this.http.get(URI).pipe(
      map((e: any) => {
        this.paginador = { next: this.cargarIndice(e.next), previous: this.cargarIndice(e.previous),
                           counter: e.count, missing: this.paginasrestantes(e.count) };
        return e.results.map(ei => ei);
      })
    );
  }

  cargarIndice(valor: string): number {
    if (valor === undefined || valor === null) {
      return -1;
    }
    const cadena = valor.toString().charAt(valor.length - 1);
    const indice = Number(cadena);
    return indice;
  }

  paginasrestantes(total: number) {
    if ((total === undefined || total === null) && total <= 0) {
      return 0;
    }
    const totalPaginas = total / 10;
    console.log(Math.round(totalPaginas), total)
    return Math.round(totalPaginas);
  }

  loadRespuestaEspecie() {
    return this.http.get(this.getEspeciesUrl).pipe(
      map((e: any) => {
        return e.results.map(ei => ei);
      })
    );
  }

  loadEspecie(nombre: string): Observable<Species> {

    return this.http.get(`${URI_SWAPI.get_specie}${nombre}`)
      .pipe(
        map((e: any) => {
          return e.results.map(ei => ei);
        })
      );
  }
}
