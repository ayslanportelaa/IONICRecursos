import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardMoshePage } from './card-moshe.page';

const routes: Routes = [
  {
    path: '',
    component: CardMoshePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardMoshePageRoutingModule {}
