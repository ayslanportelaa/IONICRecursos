import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-viagem',
  templateUrl: './calendario-viagem.page.html',
  styleUrls: ['./calendario-viagem.page.scss'],
})
export class CalendarioViagemPage implements OnInit {

  constructor() { }

  public ligaDesligaCalendarioDataIda: boolean = false;
  public ligaDesligaCalendarioDataVolta: boolean = false;
  public doneTextClicked = false;
  public dataIdaModel: string;
  public dataVoltaModel: string;
  public dataIdaCalendario: string;

  ngOnInit() {
  }

  startDate: Date;
  endDate: Date;

  openCalendar(type: 'start' | 'end') {
    const selectedDate = prompt('Selecione uma data (DD/MM/YYYY):');

    if (selectedDate) {
      const date = new Date(selectedDate);
      if (type === 'start') {
        this.startDate = date;
      } else {
        // Considerando que a data de volta é a data de ida + 7 dias
        this.endDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
      }
    }
  }
  
}
