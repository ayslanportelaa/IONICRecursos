import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

 // Definindo a variável que será utilizada na home.page.html
  mensagem : string;


  constructor(public alertCtrl: AlertController) {}

  

  ngOnInit() {
  }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async alertComum() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',                  // Aqui pode-se criar uma página CSS para customizar o estilo do Alert
      header: 'Atenção!!!',                        // Titulo do Alert
      subHeader: 'Eu sou um Alert Comum',         // Sub-titulo do alert
      message: 'Clique em "OK", para me fechar.', // conteudo do alert
      buttons: ['OK']                            //Botão de confirmação para fechar o alert
    });

    await alert.present();  // Aqui será exibido o alert na tela
  }
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*


*/
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 async alertMultiplosBotoes() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Atenção!!!',
      subHeader: 'Eu sou um Alert de múltiplos botões',
      message: 'Clique em alguma opção abaixo',
      buttons: ['Cancelar', 'Salvar', 'Deletar']
    });

    await alert.present();
  }
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

 


*/
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 async confirm() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Atenção !!!',
    message: '<strong>Confirma a exclusão do usuário ?</strong>!!!',
    buttons: [
      {
        text: 'Não',
        role: 'cancel',
        cssClass: 'secondary',
        id: 'cancel-button',
        handler: (blah) => {
          this.mensagem = "O usuário não foi excluído";
        }
      }, {
        text: 'Sim',
        id: 'confirm-button',
        handler: () => {
          this.mensagem = "O usuário foi excluído";
        }
      },
      {
        text: 'Limpar',
        id: 'confirm-button',
        handler: () => {
          this.mensagem = "";
        }
      }
    ]
  });

  await alert.present();
}
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
/*




*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 async prompt() {
  const alert = await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'Prompt!',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Placeholder 1'
      },
      {
        name: 'name2',
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Placeholder 2'
      },
      // multiline input.
      {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Placeholder 3'
      },
      {
        name: 'name3',
        value: 'http://ionicframework.com',
        type: 'url',
        placeholder: 'Favorite site ever'
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date'
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'name7',
        type: 'number'
      },
      {
        name: 'name8',
        type: 'password',
        placeholder: 'Advanced Attributes',
        cssClass: 'specialClass',
        attributes: {
          maxlength: 4,
          inputmode: 'decimal'
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  });

  await alert.present();
}
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

}
