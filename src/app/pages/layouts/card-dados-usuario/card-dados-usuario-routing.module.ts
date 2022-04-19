import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardDadosUsuarioPage } from './card-dados-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CardDadosUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardDadosUsuarioPageRoutingModule {}
