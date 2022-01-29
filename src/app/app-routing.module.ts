import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { FormComponent } from './departamento/form.component';

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'departamentos', component: DepartamentoComponent},
  {path: 'departamentos/form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
