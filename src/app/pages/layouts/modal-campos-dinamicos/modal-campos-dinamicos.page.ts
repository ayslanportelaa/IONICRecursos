import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';


@Component({
  selector: 'app-modal-campos-dinamicos',
  templateUrl: './modal-campos-dinamicos.page.html',
  styleUrls: ['./modal-campos-dinamicos.page.scss'],
})
export class ModalCamposDinamicosPage {
  formulario: FormGroup;
  public toggleLigaDesliga:number;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,) {
    this.formulario = this.formBuilder.group({
      nome: [''],
      idade:[''],
    
    });
  }

  submitForm() {
    console.log('Nome:', this.formulario.controls['nome'].value);

  }

  closeModal() {

    this.modalController.dismiss({
      'dismissed': true
    });

  }


  ligaDesligaCamposTitularCcredito(evento: any) {

    if (evento.detail.checked) {

     
      this.toggleLigaDesliga = 1;
      console.log("Ligado",this.toggleLigaDesliga);

    }else{

      this.toggleLigaDesliga = 2;
      console.log("Desligado",this.toggleLigaDesliga);
    }

  }


  



}