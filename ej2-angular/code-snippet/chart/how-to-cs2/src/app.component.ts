import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, ChartAllModule, AccumulationChartAllModule } from '@syncfusion/ej2-angular-charts'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService } from '@syncfusion/ej2-angular-grids'
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts'
import { DialogModule } from '@syncfusion/ej2-angular-popups'
import { PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts'
import {
    LineSeriesService, DateTimeService, DataLabelService, StackingColumnSeriesService, CategoryService,
    StepAreaSeriesService, SplineSeriesService, ScrollBarService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
    SelectionService, ScatterSeriesService, ZoomService, ColumnSeriesService, AreaSeriesService, RangeAreaSeriesService
} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         ChartModule, ChartAllModule, AccumulationChartAllModule, AccumulationChartModule, GridModule, DialogModule
    ],

providers: [LineSeriesService, DateTimeService, ColumnSeriesService, DataLabelService, ZoomService, StackingColumnSeriesService, CategoryService,
        StepAreaSeriesService, SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
        PieSeriesService, AccumulationTooltipService, ScrollBarService, AccumulationDataLabelService, SelectionService, ScatterSeriesService,
        PageService, AreaSeriesService, RangeAreaSeriesService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart style="display:block;" [chartArea]="chartArea" [width]="width" align="center"
      id="chartcontainer" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis"
      [title]="title" [tooltip]="tooltip" >
      <e-series-collection>
        <e-series [dataSource]="data" type="Column" xName="x" yName="y" name="Gold"
          width="2" columnWidth="0.4">
        </e-series>
      </e-series-collection>
    </ejs-chart>`
})
export class AppComponent {
    public data: Object[] = [
    { x: "USA", y: 4 },
    { x: "GBR", y: 5 },
    { x: "CHN", y: 6 }
  ];
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: "Category",
    interval: 1,
    majorGridLines: { width: 0 }
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 }
  };
  public marker: Object = {
    dataLabel: {
      visible: true,
      position: "Top",
      font: { fontWeight: "600", color: "#ffffff" }
    }
  };
  public title: string = "Olympic Medal Counts - RIO";
  public tooltip: Object = {
    enable: true
  };
  // custom code start
  // custom code end
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  public width: string = "60%";

  constructor() {
    //code
  }

}


