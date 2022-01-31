import { Component, OnInit } from '@angular/core';
import { Departamento } from './departamento';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  public departamento: Departamento = new Departamento();

  constructor() { }

  ngOnInit(): void {

  }

}
