import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDesktopMobilePageRoutingModule } from './card-desktop-mobile-routing.module';

import { CardDesktopMobilePage } from './card-desktop-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDesktopMobilePageRoutingModule
  ],
  declarations: [CardDesktopMobilePage]
})
export class CardDesktopMobilePageModule {}
