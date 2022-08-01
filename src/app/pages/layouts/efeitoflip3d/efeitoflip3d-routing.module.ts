import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Efeitoflip3dPage } from './efeitoflip3d.page';

const routes: Routes = [
  {
    path: '',
    component: Efeitoflip3dPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Efeitoflip3dPageRoutingModule {}
