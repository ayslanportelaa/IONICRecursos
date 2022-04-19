import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTable2PageRoutingModule } from './data-table2-routing.module';

import { DataTable2Page } from './data-table2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTable2PageRoutingModule
  ],
  declarations: [DataTable2Page]
})
export class DataTable2PageModule {}
