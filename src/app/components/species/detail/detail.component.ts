import { Species } from '../../../models/species';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() especie: Species;
  @Output() detailEmmiter = new EventEmitter();
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  }

  volver() {
    this.detailEmmiter.emit(false);
  }

}
