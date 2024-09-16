import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationAnnotationService,
  AccumulationDataLabelService, AccumulationChartComponent } from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';
@Component({
imports: [
         AccumulationChartModule
    ],

providers: [PieSeriesService, AccumulationLegendService, AccumulationTooltipService, AccumulationDataLabelService,
     AccumulationAnnotationService, AccumulationChartComponent],
standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'  legendShape='Rectangle'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>
    <button ej-button id='add' (click)='click()'>Update Data</button>`
})
export class AppComponent implements OnInit {
    public chart?: AccumulationChartComponent;
    public piedata?: Object[];
    public legendSettings?: Object;
    public getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    ngOnInit(): void {
        this.legendSettings = {
          visible: true
        };
        this.piedata = pieData;
    }
    click() {
        const newData = (this.chart.series[0].dataSource as Object[]).map((item: { x: string, y: number }) => {
            const value: number = this.getRandomInt(10, 90);
            return { x: item.x, y: value };
        });
        if (this.chart.series.length > 0) {
            this.chart.series[0].setData(newData, 500);
        }
      }
}


