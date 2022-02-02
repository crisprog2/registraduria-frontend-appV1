import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentoService } from './departamento/departamento.service';
import { FormComponent } from './departamento/form.component';
import { FormsModule } from '@angular/forms';
import { ConsultarComponent } from './departamento/consultar.component';
import { EliminarComponent } from './departamento/eliminar.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { FormciudadComponent } from './ciudad/formciudad.component';
import { FormActualizarComponent } from './departamento/form-actualizar.component';
import { FormActualizarCiudadComponent } from './ciudad/form-actualizar-ciudad.component';
import { ConsultarCiudadComponent } from './ciudad/consultar-ciudad.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DepartamentoComponent,
    FormComponent,
    ConsultarComponent,
    EliminarComponent,
    CiudadComponent,
    FormciudadComponent,
    FormActualizarComponent,
    FormActualizarCiudadComponent,
    ConsultarCiudadComponent,
    EliminarCiudadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DepartamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
