import { Component, OnInit } from '@angular/core';
import { Ciudad } from './ciudad';

@Component({
  selector: 'app-consultar-ciudad',
  templateUrl: './consultar-ciudad.component.html',
  styleUrls: ['./consultar-ciudad.component.css']
})
export class ConsultarCiudadComponent implements OnInit {

  ciudad: Ciudad = new Ciudad();

  constructor() { }

  ngOnInit(): void {
  }

}
