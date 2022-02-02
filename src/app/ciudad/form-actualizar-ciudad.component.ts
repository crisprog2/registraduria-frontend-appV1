import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Departamento } from '../departamento/departamento';
import { DepartamentoService } from '../departamento/departamento.service';
import { Ciudad } from './ciudad';
import { CiudadService } from './ciudad.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-form-actualizar-ciudad',
  templateUrl: './form-actualizar-ciudad.component.html',
  styleUrls: ['./form-actualizar-ciudad.component.css']
})
export class FormActualizarCiudadComponent implements OnInit {

  public titulo: string="Actualizar Ciudad";

  departamentos: Departamento[] | undefined;
  public ciudad: Ciudad = new Ciudad();

  constructor(private departamentoService: DepartamentoService, private ciudadService: CiudadService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.departamentoService.getDepartamentos().subscribe(
      departamentos => this.departamentos = departamentos
    );

    this.consultaCiudad();

  }

  consultaCiudad(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ciudadService.getCiudad(id).subscribe(
          ciudad=>this.ciudad=ciudad
        )
      }
    })
  }


  updateCiudad(): void{
    this.ciudadService.updateCiudad(this.ciudad).subscribe( ciudad => {
      this.router.navigate(['/ciudades'])
      swal.fire('Ciudad Actualizada', `Ciudad ${ciudad.ciudad} actualizada con exito`, 'success')
    })
  }

}
