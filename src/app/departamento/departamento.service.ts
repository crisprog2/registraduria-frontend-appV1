import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Departamento } from './departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private urlEndPoint:string = 'http://localhost:8080/api/departamentos';
  private urlEndPointCreate:string = 'http://localhost:8080/api/departamento';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getDepartamentos() : Observable<Departamento[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Departamento[])
    );
  }

  create(departamento: Departamento) : Observable<Departamento> {
    return this.http.post<Departamento>(this.urlEndPointCreate, departamento, {headers: this.httpHeaders})
  }

  getDepartamento(id: any) : Observable<Departamento>{
    return this.http.get<Departamento>(`${this.urlEndPointCreate}/${id}`);
  }

  updateDepartamento(departamento: Departamento) : Observable<Departamento>{
    return this.http.put<Departamento>(`${this.urlEndPointCreate}/${departamento.codDepartamento}`, departamento, {headers: this.httpHeaders});
  }

  deleteDepartamento(id: any): Observable<Departamento>{
    return this.http.delete<Departamento>(`${this.urlEndPointCreate}/${id}`, {headers: this.httpHeaders})
  }

}
