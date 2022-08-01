import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Efeitoflip3dPageRoutingModule } from './efeitoflip3d-routing.module';

import { Efeitoflip3dPage } from './efeitoflip3d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Efeitoflip3dPageRoutingModule
  ],
  declarations: [Efeitoflip3dPage]
})
export class Efeitoflip3dPageModule {}
