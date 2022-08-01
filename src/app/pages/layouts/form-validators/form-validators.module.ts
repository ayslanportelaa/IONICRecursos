import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormValidatorsPageRoutingModule } from './form-validators-routing.module';

import { FormValidatorsPage } from './form-validators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormValidatorsPageRoutingModule
  ],
  declarations: [FormValidatorsPage]
})
export class FormValidatorsPageModule {}
