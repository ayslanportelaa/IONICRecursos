import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTable2Page } from './data-table2.page';

const routes: Routes = [
  {
    path: '',
    component: DataTable2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTable2PageRoutingModule {}
