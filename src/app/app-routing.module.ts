import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FormComponent } from './departamento/form.component';
import { ConsultarComponent } from './departamento/consultar.component';
import { EliminarComponent } from './departamento/eliminar.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { FormciudadComponent } from './ciudad/formciudad.component';
import { FormActualizarComponent } from './departamento/form-actualizar.component';
import { FormActualizarCiudadComponent } from './ciudad/form-actualizar-ciudad.component';
import { ConsultarCiudadComponent } from './ciudad/consultar-ciudad.component';

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'departamentos', component: DepartamentoComponent},
  {path: 'departamentos/consultar', component: ConsultarComponent},
  {path: 'departamentos/form', component: FormComponent},
  {path: 'departamentos/form/:id', component: FormActualizarComponent},
  {path: 'departamentos/eliminar/:id', component: EliminarComponent},
  {path: 'ciudades', component: CiudadComponent},
  {path: 'ciudades/consultar', component: ConsultarCiudadComponent},
  {path: 'ciudades/form', component: FormciudadComponent},
  {path: 'ciudades/form/:id', component: FormActualizarCiudadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
