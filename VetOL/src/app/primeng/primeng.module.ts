import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@NgModule({
  
  exports:[
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule
  ]
})
export class PrimengModule { }
