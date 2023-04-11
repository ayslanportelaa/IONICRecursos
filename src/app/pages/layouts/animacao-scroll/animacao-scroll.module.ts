import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacaoScrollPageRoutingModule } from './animacao-scroll-routing.module';

import { AnimacaoScrollPage } from './animacao-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacaoScrollPageRoutingModule
  ],
  declarations: [AnimacaoScrollPage]
})
export class AnimacaoScrollPageModule {}
