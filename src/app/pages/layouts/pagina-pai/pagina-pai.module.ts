import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaPaiPageRoutingModule } from './pagina-pai-routing.module';

import { PaginaPaiPage } from './pagina-pai.page';

import {CardMoshePage} from '../card-moshe/card-moshe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaPaiPageRoutingModule
  ],
  declarations: [PaginaPaiPage,CardMoshePage]
})
export class PaginaPaiPageModule {}
