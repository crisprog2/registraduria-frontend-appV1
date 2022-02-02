import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from '../departamento/departamento';
import { DepartamentoService } from '../departamento/departamento.service';
import { Ciudad } from './ciudad';
import { CiudadService } from './ciudad.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-formciudad',
  templateUrl: './formciudad.component.html',
  styleUrls: ['./formciudad.component.css']
})
export class FormciudadComponent implements OnInit {

  departamentos: Departamento[] | undefined;
  public ciudad: Ciudad = new Ciudad();
  public titulo: string="Crear/Actualizar Ciudad";

  constructor(private departamentoService: DepartamentoService, private ciudadService: CiudadService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe(
      departamentos => this.departamentos = departamentos
    );
  }

  public create(): void{
    this.ciudadService.createCiudad(this.ciudad).subscribe(
      ciudad => {
        this.router.navigate(['/ciudades'])
        swal.fire('Nueva Ciudad', `Ciudad ${ciudad.ciudad} creada con exito`, 'success')
      }
    )
  }

}
