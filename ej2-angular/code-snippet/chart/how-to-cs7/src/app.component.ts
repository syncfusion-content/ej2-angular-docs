import { ChartModule, ChartAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts'
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import {
    LineSeriesService, DateTimeService, DataLabelService, StackingColumnSeriesService, CategoryService,
    StepAreaSeriesService, SplineSeriesService, ScrollBarService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
    SelectionService, ScatterSeriesService, ZoomService, ColumnSeriesService, AreaSeriesService, RangeAreaSeriesService
} from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         ChartModule, ChartAllModule, AccumulationChartAllModule, AccumulationChartModule
    ],

providers: [LineSeriesService, DateTimeService, ColumnSeriesService, DataLabelService, ZoomService, StackingColumnSeriesService, CategoryService,
        StepAreaSeriesService, SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
        PieSeriesService, AccumulationTooltipService, ScrollBarService, AccumulationDataLabelService, SelectionService, ScatterSeriesService,
        AreaSeriesService, RangeAreaSeriesService ],
standalone: true,
  selector: 'app-container',
  template: ` <div><button ej-button id='print' (click)='Add()'>Add Chart</button><div  *ngFor="let item of items"><ejs-chart [id]="id" [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Germany' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart></div></div>`,
})

export class AppComponent implements OnInit {
  public i:number = 0;
  public id:string ='chart-container';
  public chartData?: Object[];
  public marker?: Object;
  public title?: string;
  public items:any =[];
  ngOnInit(): void {
    this.chartData = [{ x: 1, y: 21 }, { x: 2, y: 24 }, { x: 3, y: 36 },
    { x: 4, y: 38 }, { x: 5, y: 54 }, { x: 6, y: 57 }, { x: 7, y: 70 }],
      this.title = 'Inflation - Consumer Price';
    this.marker = { visible: true };
  }
  Add() {
   this.id = 'chart-container' + this.i;
    var item = {
      "id":this.id,
      }
    this.items.push(item);
     this.i++;
  }
}
