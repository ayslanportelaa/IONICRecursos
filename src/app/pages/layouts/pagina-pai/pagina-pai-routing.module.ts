import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPaiPage } from './pagina-pai.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaPaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaPaiPageRoutingModule {}
