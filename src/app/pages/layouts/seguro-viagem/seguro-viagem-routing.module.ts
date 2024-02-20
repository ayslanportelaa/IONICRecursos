import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguroViagemPage } from './seguro-viagem.page';

const routes: Routes = [
  {
    path: '',
    component: SeguroViagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguroViagemPageRoutingModule {}
