import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioViagemPage } from './calendario-viagem.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioViagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioViagemPageRoutingModule {}
