import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridMoshe2PageRoutingModule } from './grid-moshe2-routing.module';

import { GridMoshe2Page } from './grid-moshe2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridMoshe2PageRoutingModule
  ],
  declarations: [GridMoshe2Page]
})
export class GridMoshe2PageModule {}
