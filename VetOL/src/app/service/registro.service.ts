import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  public url: string;
  public httpOptions: any;
  constructor(
    private httpClient: HttpClient
  ) { 
    this.url =  'http://sd-3971730-h00001.ferozo.net';
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  guardar(nombre: string, apellido: string, edad: number, email: string, pass: string, confirmPass: string, tycs: string, ){
    return this.httpClient.post(`${this.url}/registro.php`,{
      nombre, 
      apellido,
      edad,
      password: pass,
      usuario: email,
      tycs,
    },this.httpOptions)
  }

  guardarVet(nombre: string, apellido: string, edad: number, lic: number, email: string, pass: string, confirmPass: string, tycs: string, ){
    return this.httpClient.post(`${this.url}/registro-vet.php`,{
      nombre, 
      apellido,
      edad,
      password: pass,
      usuario: email,
      lic,
      tycs,
    },this.httpOptions)
  }
}
