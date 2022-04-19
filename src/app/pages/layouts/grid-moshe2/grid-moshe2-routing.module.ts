import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridMoshe2Page } from './grid-moshe2.page';

const routes: Routes = [
  {
    path: '',
    component: GridMoshe2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridMoshe2PageRoutingModule {}
