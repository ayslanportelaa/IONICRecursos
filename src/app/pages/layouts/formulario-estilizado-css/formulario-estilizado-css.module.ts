import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioEstilizadoCssPageRoutingModule } from './formulario-estilizado-css-routing.module';

import { FormularioEstilizadoCssPage } from './formulario-estilizado-css.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioEstilizadoCssPageRoutingModule
  ],
  declarations: [FormularioEstilizadoCssPage]
})
export class FormularioEstilizadoCssPageModule {}
