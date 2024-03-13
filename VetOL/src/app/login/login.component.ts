import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
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

}
