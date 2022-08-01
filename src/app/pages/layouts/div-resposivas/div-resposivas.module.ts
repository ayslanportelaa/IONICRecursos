import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivResposivasPageRoutingModule } from './div-resposivas-routing.module';

import { DivResposivasPage } from './div-resposivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivResposivasPageRoutingModule
  ],
  declarations: [DivResposivasPage]
})
export class DivResposivasPageModule {}
