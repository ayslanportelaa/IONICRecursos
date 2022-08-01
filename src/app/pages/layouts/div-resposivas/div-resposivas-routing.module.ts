import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivResposivasPage } from './div-resposivas.page';

const routes: Routes = [
  {
    path: '',
    component: DivResposivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivResposivasPageRoutingModule {}
