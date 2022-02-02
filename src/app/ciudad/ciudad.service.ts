import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ciudad } from './ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private urlEndPoint:string = 'http://localhost:8080/api/ciudades';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getCiudades():Observable<Ciudad[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map( (response) => response as Ciudad[])
    );
  }

}
