import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  
  public value!: number;
  public form = new FormGroup({
    fomrs: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private router : Router,
    private logServ: LoginService,
  ){}
  ngOnInit() { }

  preRegristro(){
    if (this.value == 100) {
      this.router.navigate(['registro'])
    } else {
      this.router.navigate(['registro-vet'])
    }
  }

  loguedUser() {
    console.log(this.form?.get('email')?.value);
    this.logServ.loginSucc(
      this.form?.get('email')?.value, 
      this.form?.get('pass')?.value)
      .subscribe((res: any) =>{
        this.logServ.loggedUser = res.data;
        if (res.success && res.data.tipoUsuario == 'usuario' ) {
         this.router.navigate(['dashboard']);
        } 
        if (res.success && res.data.tipoUsuario == 'veterinario') {
          this.router.navigate(['dashboard-veterinarios'])
          
        }
    });
  }

  registrarse() {
    console.log(this.value);
    this.router.navigate([this.value === 100 ? 'registro-vet' :'registro'] );
  }

}
