import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridMosheUsuariosPageRoutingModule } from './grid-moshe-usuarios-routing.module';

import { GridMosheUsuariosPage } from './grid-moshe-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridMosheUsuariosPageRoutingModule
  ],
  declarations: [GridMosheUsuariosPage]
})
export class GridMosheUsuariosPageModule {}
