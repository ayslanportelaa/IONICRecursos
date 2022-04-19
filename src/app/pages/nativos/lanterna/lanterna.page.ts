import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-lanterna',
  templateUrl: './lanterna.page.html',
  styleUrls: ['./lanterna.page.scss'],
})
export class LanternaPage implements OnInit {
  msg:string;
  constructor(private flashlight: Flashlight) { }

  ngOnInit() {
  }

  ligaLanterna(){
  this.flashlight.switchOn();
  this.msg = "Lanterna ligada";
}

desligaLanterna(){
  this.flashlight.switchOff();
  this.msg = "Lanterna desligada";
} 

}
