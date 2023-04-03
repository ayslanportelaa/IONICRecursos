import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridsResponsivasPageRoutingModule } from './grids-responsivas-routing.module';

import { GridsResponsivasPage } from './grids-responsivas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridsResponsivasPageRoutingModule
  ],
  declarations: [GridsResponsivasPage]
})
export class GridsResponsivasPageModule {}
