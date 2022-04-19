import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Platform, NavController, IonItemSliding } from '@ionic/angular';


import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-grid-moshe2',
  templateUrl: './grid-moshe2.page.html',
  styleUrls: ['./grid-moshe2.page.scss'],
})
export class GridMoshe2Page implements OnInit {
  modalCtrl: any;
 
 


  constructor(
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
   
  }

  ngOnDestroy() {
   
  }

  async novoUsuario() {


    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Novo Usuário',
    
      inputs: [
          {
          name:'tr',
          type:'text',
        },
      ],
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          cssClass: 'secondary',
          handler: data => {
            console.log('Confirma Cancelar');
          }
        }, {
          text: 'ADD usuário',
          handler: data => {

            // Validações do prompt ALERT, na hora de editar as infos do usuário 
            if (data.nomeCompleto == '') {
              //this.global.showToast('ERRO - Preencha o nome do usuário', 3);
              return (false);

            }

            if (data.email == '') {
             // this.global.showToast('ERRO - Preencha o e-mail do usuário', 3);
              return (false);

            }
            //this.global.showToast('Alterações do usuário : ' + data.nomeCompleto + ' realizadas com sucesso.', 5);
          }
        }
      ]
    });

    await alert.present();
  }

  ionViewDidEnter() {

    console.log('ionViewDidEnter WebIdashStatusPage');
  }

 

  }


