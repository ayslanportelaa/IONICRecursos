import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleOauthPage } from './google-oauth.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleOauthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleOauthPageRoutingModule {}
