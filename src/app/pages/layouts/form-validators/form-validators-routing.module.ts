import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormValidatorsPage } from './form-validators.page';

const routes: Routes = [
  {
    path: '',
    component: FormValidatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormValidatorsPageRoutingModule {}
