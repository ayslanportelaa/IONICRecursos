import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDadosUsuarioPageRoutingModule } from './card-dados-usuario-routing.module';

import { CardDadosUsuarioPage } from './card-dados-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDadosUsuarioPageRoutingModule
  ],
  declarations: [CardDadosUsuarioPage]
})
export class CardDadosUsuarioPageModule {}
