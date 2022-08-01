import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-form-novo-usuario',
  templateUrl: './form-novo-usuario.page.html',
  styleUrls: ['./form-novo-usuario.page.scss'],
})
export class FormNovoUsuarioPage implements OnInit {

  public form1: FormGroup;
  public modalCtrl: ModalController;
  public emailUsuario: string;
  public supervisor: boolean;
  public msgEmailVazio: string = '';
  public listaMenu = ["Home", "Sair", "Meus Dados", "Abacaxi", "Jornal", "Virgem"];

  constructor(
    public formBuilder: FormBuilder,
    private modalController: ModalController


  ) { }

  ngOnInit() {

    this.form1 = this.formBuilder.group({
      emailUsuario: new FormControl('', [Validators.required, Validators.minLength(6)]),
      supervisor: ['false'],

    }

    );


      



    this.dadosDoArray();
    console.log(this.listaMenu);
  }


 

  fecharModal() {

    this.modalController.dismiss();

  }

  addUsuario() {

    this.emailUsuario = this.form1.controls.emailUsuario.value;
    this.supervisor = this.form1.controls.supervisor.value;

    // if (this.emailUsuario == '') {
    //   alert('E-mail obrigatório');
    //   this.msgEmailVazio = 'Preencha o e-mail';
    //   return
    // }
    alert('E-mail obrigatório');


  }

  // mudarPosicaoArray() {

  //   console.log(this.listaMenu);
  //   var qtdeElementosListaMenu = this.listaMenu.length;
  //   console.log(qtdeElementosListaMenu);
  // }


  mudarPosicaoOpcaoMenu(array, from, to) {

    array.splice(to, 0, array.splice(from, 1)[0]);
    return array;

  }

  dadosDoArray() {

    var posicaoDesejada = this.listaMenu.length;


    var posicaoSair = this.listaMenu.findIndex((opcao, index, array) => opcao === 'Sair');



    console.log("Posição do Sair é :", posicaoSair);
    console.log("Ultima posição do Array é", posicaoDesejada);


    this.mudarPosicaoOpcaoMenu(this.listaMenu, posicaoSair, posicaoDesejada);
  }


}
