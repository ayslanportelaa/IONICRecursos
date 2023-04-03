import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCamposDinamicosPageRoutingModule } from './modal-campos-dinamicos-routing.module';

import { ModalCamposDinamicosPage } from './modal-campos-dinamicos.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalCamposDinamicosPageRoutingModule
  ],
  declarations: [ModalCamposDinamicosPage]
})
export class ModalCamposDinamicosPageModule {}
