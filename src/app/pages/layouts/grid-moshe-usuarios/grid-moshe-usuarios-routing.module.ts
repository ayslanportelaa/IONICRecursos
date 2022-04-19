import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridMosheUsuariosPage } from './grid-moshe-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: GridMosheUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridMosheUsuariosPageRoutingModule {}
