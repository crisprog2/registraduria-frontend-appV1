import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ciudad } from './ciudad';
import { CiudadService } from './ciudad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-ciudad',
  templateUrl: './eliminar-ciudad.component.html',
  styleUrls: ['./eliminar-ciudad.component.css']
})
export class EliminarCiudadComponent implements OnInit {

  titulo: string="Eliminar Ciudad";
  ciudad: Ciudad= new Ciudad();

  constructor(private ciudadService: CiudadService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

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

  public deleteCiudad(): void {

    Swal.fire({
      title: '¿Esta seguro de que quiere eliminar la Ciudad?',
      text: "¡Esta acción no se puede cambiar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ciudadService.deleteCiudad(this.ciudad.codCiudad).subscribe( ciudad => {
          this.router.navigate(['/ciudades'])
        })
        Swal.fire(
          'Borrado!',
          'La Ciudad ha sido Borrada.',
          'success'
        )
      }
    })
  }

}
