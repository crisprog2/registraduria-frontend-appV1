import { Component, OnInit } from '@angular/core';
import { Departamento } from './departamento';
import { DepartamentoService } from './departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  departamentos: Departamento[] | undefined;

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {

    this.departamentoService.getDepartamentos().subscribe(
      departamentos => this.departamentos = departamentos
    );

  }

}
