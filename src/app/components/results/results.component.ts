import {Component, Inject, Input, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface Individuo {
  Value: number;
  X: number;
  Y: number;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  chart: Chart;
  valores: number[] = [];
  names: string[] = [];
  maxX = 0;
  maxY = 0;

  constructor(private dialogRef: MatDialogRef<ResultsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                data: Individuo[],
                func: string
              }) { }

  ngOnInit() {
    this.maxX = this.data.data[0].X;
    this.maxY = this.data.data[0].Y;
    this.data.data.forEach((v) => {
      this.valores.push(v.Value)
      this.names.push(`X: ${v.X},\n Y:${v.Y}`);
    })
    this.loadChart()
  }

  loadChart() {
    this.chart = new Chart('generationChart', {
      type: 'line',
      data: {
        labels: this.names,
        datasets: [
          {
            label: 'Individuos',
            backgroundColor: '#80deea',
            borderColor: '#3cba9f',
            borderWidth: 1,
            fill: false,
            data: this.valores
          }
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Ultima generación'
        },
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            display: false
          }]
        }
      }
    });
  }

}
