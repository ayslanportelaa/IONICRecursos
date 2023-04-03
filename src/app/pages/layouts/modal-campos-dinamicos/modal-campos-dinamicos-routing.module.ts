import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCamposDinamicosPage } from './modal-campos-dinamicos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCamposDinamicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCamposDinamicosPageRoutingModule {}
