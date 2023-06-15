import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';
//import {ModalPageModule} from './pages/layouts/modal/modal.module'
import { UserComponent } from './pages/componentes/user/user.component';
import * as msal from '@azure/msal-browser';

@NgModule({
  declarations: [AppComponent,UserComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule/*,ModalPageModule*/,BrowserAnimationsModule],
  providers: [
    ScreenOrientation,
    Flashlight,
    BatteryStatus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
