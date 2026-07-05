import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { StepLineSeriesService, DateTimeService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [ChartModule],
    providers: [StepLineSeriesService, DateTimeService, LegendService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [tooltip]="tooltip" [legendSettings]="legendSettings" title="Unemployment Rates 1975-2010">
                <e-series-collection>
                    <e-series [dataSource]="chartData" type="StepLine" xName="x" yName="y" name="China" [width]="2" [marker]="marker"></e-series>
                    <e-series [dataSource]="chartData"type="StepLine" xName="x" yName="y1" name="Australia" [width]="2" [marker]="marker"></e-series>
                    <e-series [dataSource]="chartData" type="StepLine" xName="x" yName="y2" name="Japan" [width]="2" [marker]="marker"></e-series>
                </e-series-collection>
            </ejs-chart>`
})

export class AppComponent implements OnInit {
    
public chartData: Object[] = [
    { x: new Date(1975, 0, 1), y: 16, y1: 10, y2: 4.5 },
    { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
    { x: new Date(1985, 0, 1), y: 19, y1: 11, y2: 6.5 },
    { x: new Date(1990, 0, 1), y: 14.4, y1: 7, y2: 4.4 },
    { x: new Date(1995, 0, 1), y: 11.5, y1: 8, y2: 5 },
    { x: new Date(2000, 0, 1), y: 14, y1: 6, y2: 1.5 },
    { x: new Date(2005, 0, 1), y: 10, y1: 3.5, y2: 2.5 },
    { x: new Date(2010, 0, 1), y: 16, y1: 7, y2: 3.7 }
  ];

  public primaryXAxis: Object = {
    title: 'Years',
    lineStyle: { width: 0 },
    labelFormat: 'y',
    intervalType: 'Years',
    valueType: 'DateTime',
    edgeLabelPlacement: 'Shift'
  };

  public primaryYAxis: Object = {
    title: 'Percentage (%)',
    minimum: 0,
    maximum: 20,
    interval: 4,
    labelFormat: '{value}%'
  };

  public tooltip: Object = {
    enable: true,
    format: '${point.x:MMM yyyy}<br/>${point.y:p0}'
  };

  public legendSettings: Object = {
    visible: true
  };

  public marker = { visible: true, width: 10, height: 10 };

}
