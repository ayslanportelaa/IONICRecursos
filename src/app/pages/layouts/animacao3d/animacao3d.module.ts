import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacao3dPageRoutingModule } from './animacao3d-routing.module';

import { Animacao3dPage } from './animacao3d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacao3dPageRoutingModule
  ],
  declarations: [Animacao3dPage]
})
export class Animacao3dPageModule {}
