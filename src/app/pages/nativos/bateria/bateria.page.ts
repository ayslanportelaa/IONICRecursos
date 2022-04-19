import { Component, OnInit } from '@angular/core';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';

@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.page.html',
  styleUrls: ['./bateria.page.scss'],
})
export class BateriaPage implements OnInit {
  subscription : any;
  bateriaStatus:any;
  carregadorConectado:any;


  constructor(private batteryStatus: BatteryStatus) { }

  ngOnInit() {
  }

  // Exibe status da bateria

  statusBateria(){ 
    this.subscription = this.batteryStatus.onChange().subscribe(status => {
   this.bateriaStatus = status.level , this.carregadorConectado = status.isPlugged;

    if (this.carregadorConectado == 'true'){
      this.carregadorConectado = 'Celular conectado na tomada';
    }else{
      this.carregadorConectado = 'Celular desconectado da tomada';
    }
});

}

 // para de monitorar a bateria
 stopBateria(){
  this.subscription.unsubscribe();
  this.bateriaStatus = '';
  this.carregadorConectado ='';
}



}
