import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguroViagemPageRoutingModule } from './seguro-viagem-routing.module';

import { SeguroViagemPage } from './seguro-viagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguroViagemPageRoutingModule
  ],
  declarations: [SeguroViagemPage]
})
export class SeguroViagemPageModule {}
