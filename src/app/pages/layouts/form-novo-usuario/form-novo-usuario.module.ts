import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { FormNovoUsuarioPageRoutingModule } from './form-novo-usuario-routing.module';

import { FormNovoUsuarioPage } from './form-novo-usuario.page';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormNovoUsuarioPageRoutingModule
  ],
  declarations: [FormNovoUsuarioPage]
})
export class FormNovoUsuarioPageModule {}
