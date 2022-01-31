import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Departamento } from './departamento';
import { DepartamentoService } from './departamento.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  public titulo: string="Eliminar Departamento";

  public departamento: Departamento = new Departamento();

  constructor(private departamentoService: DepartamentoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDepartamento();
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

  public deleteDepartamento(): void {

    Swal.fire({
      title: '¿Esta seguro de que quiere eliminar el Departamento?',
      text: "¡Esta acción no se puede cambiar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.departamentoService.deleteDepartamento(this.departamento.codDepartamento).subscribe( departamento => {
          this.router.navigate(['/departamentos'])
        })
        Swal.fire(
          'Borrado!',
          'El Departamento ha sido Borrado.',
          'success'
        )
      }
    })
  }

}
