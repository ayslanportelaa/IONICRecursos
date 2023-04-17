import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MsautenticarPageRoutingModule } from './msautenticar-routing.module';

import { MsautenticarPage } from './msautenticar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsautenticarPageRoutingModule
  ],
  declarations: [MsautenticarPage]
})
export class MsautenticarPageModule {}
