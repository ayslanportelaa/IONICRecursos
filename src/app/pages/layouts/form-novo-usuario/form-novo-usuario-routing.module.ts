import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormNovoUsuarioPage } from './form-novo-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: FormNovoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormNovoUsuarioPageRoutingModule {}
