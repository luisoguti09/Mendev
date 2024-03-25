import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { SliderModule } from 'primeng/slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  
  exports:[
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    FloatLabelModule,
    CheckboxModule,
    MessagesModule,
    SliderModule,
    FontAwesomeModule
  ]
})
export class PrimengModule { }
