import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleOauthPageRoutingModule } from './google-oauth-routing.module';

import { GoogleOauthPage } from './google-oauth.page';

import { GooglePlus } from '@ionic-native/google-plus';
import { IonicNativePlugin } from '@ionic-native/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleOauthPageRoutingModule
  ],
  declarations: [GoogleOauthPage],
  providers: [
    GooglePlus,
    IonicNativePlugin
  ]
})
export class GoogleOauthPageModule {}
