import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioViagemPageRoutingModule } from './calendario-viagem-routing.module';

import { CalendarioViagemPage } from './calendario-viagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioViagemPageRoutingModule
  ],
  declarations: [CalendarioViagemPage]
})
export class CalendarioViagemPageModule {}
