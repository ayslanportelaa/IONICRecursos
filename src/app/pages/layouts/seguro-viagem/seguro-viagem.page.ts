import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-seguro-viagem',
  templateUrl: './seguro-viagem.page.html',
  styleUrls: ['./seguro-viagem.page.scss'],
})
export class SeguroViagemPage implements OnInit {

  public corBackground: string;

  constructor() { }

  ngOnInit() {


  }


  aplicarCorSolida() {
    const corSolidaElement = document.getElementById("corSolida") as HTMLInputElement;

    if (corSolidaElement) {
      const corSolidaValue = corSolidaElement.value;
      this.corBackground = '--background:' + corSolidaValue;
    }
  }


  aplicarDegrade() {
    const corDegradeElement = document.getElementById("corDegrade") as HTMLInputElement;

    if (corDegradeElement) {
      const corDegradeValue = corDegradeElement.value;
      this.corBackground = '--background:' + corDegradeValue;
    }
  }

}
