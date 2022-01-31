import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from './departamento';
import { DepartamentoService } from './departamento.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public departamento: Departamento = new Departamento();
  public titulo: string="Crear/Actualizar Departamento";

  constructor(private departamentoService: DepartamentoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDepartamento();
  }

  public create(): void{
    this.departamentoService.create(this.departamento).subscribe(
      departamento => {
        this.router.navigate(['/departamentos'])
        swal.fire('Nuevo Departamento', `Departamento ${departamento.departamento} creado con exito`, 'success')
      }
    )
  }

  public cargarDepartamento(): void{

    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.departamentoService.getDepartamento(id).subscribe(
          departamento=>this.departamento=departamento
        )
      }
    })
  }

  public updateDepartamento(): void{
    this.departamentoService.updateDepartamento(this.departamento).subscribe( departamento => {
      this.router.navigate(['/departamentos'])
      swal.fire('Departamento Actualizado', `Departamento ${departamento.departamento} actualizado con exito`, 'success')
    })
  }

}
