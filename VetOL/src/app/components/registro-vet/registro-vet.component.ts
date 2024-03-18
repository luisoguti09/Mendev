import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../service/login.service';
import { RegistroService } from '../../service/registro.service';
import { MyValidations } from '../registro/my-validations';

@Component({
  selector: 'app-registro-vet',
  templateUrl: './registro-vet.component.html',
  styleUrl: './registro-vet.component.scss'
})
export class RegistroVetComponent {

  public form: FormGroup;
  public tipoUsuarios: any;
  public regSuccess: boolean = false;
  public passIdem: boolean = false;
  public value!: number;


  constructor(
    private fb: FormBuilder,
    private logServ: LoginService,
    private regServ: RegistroService,
    private router: Router,
    private messageService: MessageService,
  ) {
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      apellido: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      edad: new FormControl(0, MyValidations.isYounger),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
      confirmPass: new FormControl('', [Validators.required]),
      tycs: new FormControl(null, [Validators.requiredTrue]),
    });

  }

  test() {
    console.log(this.form);
  }

  ngOnInit() {
    this.logServ.tipoUser().subscribe((res: any) => {
      if (!!res) {
        this.tipoUsuarios = res.filter((tU: any) => {
          return tU.descripcion != "administrador";
        })
      }
    });
  }

  verificarPass() {
    if (this.form?.get('pass')?.value == this.form?.get('confirmPass')?.value) {
      return true;
    } else {
      this.messageService.add({
        severity: 'error', summary: 'Error',
        detail: 'Las constraseñas deben coincidir'
      });
      return false;
    }
  }

  guardarVet() {
    if (this.verificarPass()) {
      this.regServ.guardarVet(
        this.form?.get('nombre')?.value,
        this.form?.get('apellido')?.value,
        this.form?.get('edad')?.value,
        this.form?.get('lic')?.value,
        this.form?.get('email')?.value,
        this.form?.get('pass')?.value,
        this.form?.get('confirmPass')?.value,
        this.form?.get('tycs')?.value
        /*this.form?.get('tipoUsuario')?.value?.descripcion*/).subscribe(res => {
          this.router.navigate(['login']);
        })
    }
  }
}
