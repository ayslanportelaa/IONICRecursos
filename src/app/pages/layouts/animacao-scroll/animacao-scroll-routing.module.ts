import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimacaoScrollPage } from './animacao-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: AnimacaoScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimacaoScrollPageRoutingModule {}
