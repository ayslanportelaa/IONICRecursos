import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';

import { FormNovoUsuarioPage } from '../form-novo-usuario/form-novo-usuario.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalPageRoutingModule,
    
    
  ],
  declarations: [ModalPage,FormNovoUsuarioPage],
  exports:[FormNovoUsuarioPage]
  
})
export class ModalPageModule {}
