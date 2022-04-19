import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardMoshePageRoutingModule } from './card-moshe-routing.module';

import { CardMoshePage } from './card-moshe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardMoshePageRoutingModule
  ],
  declarations: [CardMoshePage]
})
export class CardMoshePageModule {}
