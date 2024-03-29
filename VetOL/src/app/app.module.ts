import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PrimengModule } from './primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './components/registro/registro.component';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { RegistroVetComponent } from './components/registro-vet/registro-vet.component';
import { DashtutComponent } from './components/dashtut/dashtut.component';
import { DashboardVetComponent } from './components/dashboard-vet/dashboard-vet.component';
import { DashboardTutorComponent } from './components/dashboard-tutor/dashboard-tutor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    RegistroVetComponent,
    DashtutComponent,
    DashboardVetComponent,
    DashboardTutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent],
  exports: [
    MessagesModule
  ]
})
export class AppModule { }
