import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Animacao3dPage } from './animacao3d.page';

const routes: Routes = [
  {
    path: '',
    component: Animacao3dPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Animacao3dPageRoutingModule {}
