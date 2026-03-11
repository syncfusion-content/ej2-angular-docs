import { ViewChild } from '@angular/core'
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
    template: `<ejs-accumulationchart #chart id="chart-container" [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'  legendShape='Rectangle'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>
    <button ej-button id='add' (click)='click()'>Remove Point</button>`
})
export class AppComponent implements OnInit {
    @ViewChild('chart')
    public chart?: AccumulationChartComponent;
    public piedata?: Object[];
    public legendSettings?: Object;
    ngOnInit(): void {
        this.legendSettings = {
          visible: true
        };
        this.piedata = pieData;
    }
    click() {
        (this.chart as any).series[0].removePoint(0);
      }
}
