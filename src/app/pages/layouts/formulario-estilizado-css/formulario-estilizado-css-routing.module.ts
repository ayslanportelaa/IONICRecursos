import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioEstilizadoCssPage } from './formulario-estilizado-css.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioEstilizadoCssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioEstilizadoCssPageRoutingModule {}
