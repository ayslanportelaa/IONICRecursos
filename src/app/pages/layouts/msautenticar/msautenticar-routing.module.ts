import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsautenticarPage } from './msautenticar.page';

const routes: Routes = [
  {
    path: '',
    component: MsautenticarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsautenticarPageRoutingModule {}
