import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardDesktopMobilePage } from './card-desktop-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: CardDesktopMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardDesktopMobilePageRoutingModule {}
