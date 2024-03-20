import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroVetComponent } from './components/registro-vet/registro-vet.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'registro-vet', component: RegistroVetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
