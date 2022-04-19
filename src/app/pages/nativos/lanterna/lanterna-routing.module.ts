import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanternaPage } from './lanterna.page';

const routes: Routes = [
  {
    path: '',
    component: LanternaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanternaPageRoutingModule {}
