import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import {FormNovoUsuarioPage} from '../form-novo-usuario/form-novo-usuario.page'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],


})
export class ModalPage implements OnInit {
  public form1: FormGroup;
  public modalCtrl: ModalController;


  constructor(
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private modalController:ModalController
  ) { }

  ngOnInit() {

   
  }

  openModal(){

  const modal =  this.modalController.create({
      component:FormNovoUsuarioPage,
      cssClass: 'my-modal-class'
      
    }).then((modalElement)=>{
      modalElement.present();

      
    })
  }

 
 
 
}
