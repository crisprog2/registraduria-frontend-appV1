import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from './departamento';
import { DepartamentoService } from './departamento.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  public departamento: Departamento = new Departamento();

  constructor(private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit(): void {

  }

}
