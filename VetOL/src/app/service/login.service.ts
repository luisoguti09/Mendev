import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url: string;
  public httpOptions: any;
  public loggedUser!: any;


  constructor(
    private httpClient: HttpClient
  ) 
  { 
    this.url =  'http://sd-3971730-h00001.ferozo.net';
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  loginSucc(usuario: any, pass: any) : Observable<any> { 
    return this.httpClient.get(`${this.url}/login.php?usuario=${usuario}&password=${pass}`);
  }
  
}
