import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridsResponsivasPage } from './grids-responsivas.page';

const routes: Routes = [
  {
    path: '',
    component: GridsResponsivasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridsResponsivasPageRoutingModule {}
