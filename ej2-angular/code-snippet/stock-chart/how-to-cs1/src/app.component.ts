

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IStockChartEventArgs, getElement, PeriodsModel, StockChartComponent } from '@syncfusion/ej2-angular-charts';
import {StockChart, StockChartAxisModel } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template:
            `<ejs-stockchart id="chart-container" #chart [primaryXAxis]='primaryXAxis' [periods]='periods' title="Live Stock Chart">
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='series1' type='Candle' xName='x' yName='high' high='high' low='low' name='India' width=2 >
            </e-stockchart-series>

        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit, OnDestroy {
  public chartData?: Object[];
  public title?: string;
  public point1?: Object;
  public range?: boolean;
  public period?: boolean;
  public primaryXAxis: StockChartAxisModel = { valueType: 'DateTime' };
  public series1: Object[] = [];
  public value: number = 10;
  public intervalId?: any;
  public setTimeoutValue?: number;
  public i: number = 0;
  public date: Date = new Date('2019-09-16');
  public periods?: PeriodsModel[];

  @ViewChild('chart', {  static: true })
  public stock?: StockChartComponent | StockChartComponent;

  ngOnInit() {
    this.title = 'Efficiency of oil-fired power production';
    this.range = false;
    this.period = false;
    this.periods = [
      { intervalType: 'Minutes', interval: 1, text: '1m' },
      { intervalType: 'Minutes', interval: 30, text: '30m', },
         { intervalType: 'Hours', interval: 1, text: '1H', selected: true },
      { intervalType: 'Hours', interval: 2, text: '2H' },


  ];
    this.setTimeoutValue = 5000;
    this.intervalId = setInterval(
      () => {
        let i: number;
        if (getElement('chart-container') === null) {
          clearInterval(this.intervalId);
        } else {

          this.date = new Date(this.date.getTime() + (1 * 60 * 1000));
          // this.series1.push( { x: this.date, high: 100, low: 50, open : 60,
          //   close :  70 });
          this.series1.push( {
            x: this.date,
            high: Math.floor(Math.random() * (100 - 90 + 1) + 90),
            low: Math.floor(Math.random() * (60 - 50 + 1) + 50),
            close: Math.floor(Math.random() * (99 - 51 + 1) + 51),
            open: Math.floor(Math.random() * (99 - 51 + 1) + 51)
          });
          this.i++;
          (this.stock as StockChartComponent ).series[0].dataSource = this.series1;
          this.stock?.refresh();
        }
      },
      3000);
  }
    ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  constructor() {
    for ( ; this.i < 60; this.i++) {
      if (Math.random() > .5) {
        if (this.value < 25) {
          this.value += Math.random() * 2.0;
        } else {
          this.value -= 2.0;
        }
      }
      this.date = new Date(2019, 8, 16, 10, this.i);
      //this.date = new Date(this.date.setDate(this.date.getDate() + 1));
      this.series1[this.i] = {
        x: this.date,
        high: Math.floor(Math.random() * (100 - 90 + 1) + 90),
        low: Math.floor(Math.random() * (60 - 50 + 1) + 50),
        close: Math.floor(Math.random() * (99 - 51 + 1) + 51),
        open: Math.floor(Math.random() * (99 - 51 + 1) + 51)
      };
    }
  }
}


