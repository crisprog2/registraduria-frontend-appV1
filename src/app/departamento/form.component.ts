import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from './departamento';
import { DepartamentoService } from './departamento.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public departamento: Departamento = new Departamento();
  public titulo: string="Crear Departamento";

  constructor(private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void{
    this.departamentoService.create(this.departamento).subscribe(
      response =>this.router.navigate(['/departamentos'])
    )
  }

}
