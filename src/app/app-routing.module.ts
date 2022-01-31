import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FormComponent } from './departamento/form.component';
import { ConsultarComponent } from './departamento/consultar.component';
import { EliminarComponent } from './departamento/eliminar.component';

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'departamentos', component: DepartamentoComponent},
  {path: 'departamentos/consultar', component: ConsultarComponent},
  {path: 'departamentos/form', component: FormComponent},
  {path: 'departamentos/form/:id', component: FormComponent},
  {path: 'departamentos/eliminar/:id', component: EliminarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
