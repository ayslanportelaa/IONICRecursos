import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanternaPageRoutingModule } from './lanterna-routing.module';

import { LanternaPage } from './lanterna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LanternaPageRoutingModule
  ],
  declarations: [LanternaPage]
})
export class LanternaPageModule {}
