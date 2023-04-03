import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit {

  public graficoBarra: any;
  public graficoPizza: any;
  public graficoLinha: any;

  constructor() { }

  ngOnInit() {




    // ---------------------------------------------------------------------------------/// -->
    ////////////////////////////  CHART- GRAFICO BARRA ////////////////////////////////////
    // ---------------------------------------------------------------------------------/// -->
    this.graficoBarra = document.getElementById('chartBarra');

    new Chart(this.graficoBarra, {
      type: 'bar',
      data: {
        labels: ['Ayslan', 'Grego', 'Moshe', 'Julião', 'Gui', 'Ramos', 'Gabriel'],
        datasets: [{
          label: 'Total de Taks entregues',
          data: [12, 19, 3, 5, 2, 3, 10],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });



    // ---------------------------------------------------------------------------------/// -->
    ////////////////////////////  CHART- GRAFICO PIZZA ////////////////////////////////////
    // ---------------------------------------------------------------------------------/// -->
    this.graficoPizza = document.getElementById('chartPizza');
    new Chart(this.graficoPizza, {
      type: 'doughnut',
      data: {
        labels: ['Ayslan', 'Grego', 'Moshe', 'Julião', 'Gui', 'Ramos', 'Gabriel'],
        datasets: [{
          label: 'Total de Taks entregues',
          data: [12, 19, 3, 5, 2, 3, 10],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });



    // ---------------------------------------------------------------------------------/// -->
    ////////////////////////////  CHART- GRAFICO LINHA ////////////////////////////////////
    // ---------------------------------------------------------------------------------/// -->
    this.graficoLinha = document.getElementById('chartLinha');
    new Chart(this.graficoLinha, {
      type: 'line',
      data: {
        labels: ['Ayslan', 'Grego', 'Moshe', 'Julião', 'Gui', 'Ramos', 'Gabriel'],
        datasets: [{
          label: 'Total de Taks entregues',
          data: [12, 19, 3, 5, 2, 3, 10],
          borderWidth: 1,

        }]
      },
      options: {
        // animations: {
        //   tension: {
        //     duration: 1000,
        //     easing: 'linear',
        //     from: 1,
        //     to: 0,
        //     loop: true
        //   }
        // },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });




  }




}
