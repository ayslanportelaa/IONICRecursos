import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-animacao3d',
  templateUrl: './animacao3d.page.html',
  styleUrls: ['./animacao3d.page.scss'],
})
export class Animacao3dPage implements OnInit {

  public cssPropriedades:any;

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {

    
  }

  executaAnimacao(){

    this.cssPropriedades = 'slide-out-elliptic-right-fwd';

    

    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.navCtrl.navigateRoot('data-table');
  }, 680);
    
  }




  

}
