import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartModule,
  ChartAllModule,
  ChartComponent,
  IPrintEventArgs,
  AreaSeriesService,
  LineSeriesService,
  ExportService,
  ColumnSeriesService,
  StackingColumnSeriesService,
  StackingAreaSeriesService,
  RangeColumnSeriesService,
  ScatterSeriesService,
  PolarSeriesService,
  CategoryService,
  RadarSeriesService,
  SplineSeriesService
} from '@syncfusion/ej2-angular-charts';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  imports: [ChartModule, ButtonModule, ChartAllModule],
  providers: [
    AreaSeriesService,
    LineSeriesService,
    ExportService,
    ColumnSeriesService,
    StackingColumnSeriesService,
    StackingAreaSeriesService,
    RangeColumnSeriesService,
    ScatterSeriesService,
    PolarSeriesService,
    CategoryService,
    RadarSeriesService,
    SplineSeriesService
  ],
  standalone: true,
  selector: 'app-container',
  template: `
    <div class="col-md-8">
      <button ej-button id="print" (click)="print()">Print</button>
      <ejs-chart
        #chart
        id="chart-container"
        [primaryXAxis]="primaryXAxis"
        [primaryYAxis]="primaryYAxis"
        [title]="title"
        (beforePrint)="onBeforePrint($event)">
        <e-series-collection>
          <e-series
            [dataSource]="data"
            type="Radar"
            xName="x"
            yName="y"
            drawType="Line">
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  `
})
export class AppComponent implements OnInit {
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public title?: string;
  public data?: { x: number; y: number }[];

  @ViewChild('chart')
  public chartObj?: ChartComponent;

  ngOnInit(): void {
    this.data = [
      { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
      { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
    ];

    this.primaryXAxis = {
      title: 'Year',
      coefficient: 90,
      minimum: 2004,
      maximum: 2012,
      interval: 1
    };

    this.primaryYAxis = {
      minimum: 20,
      maximum: 40,
      interval: 5,
      title: 'Efficiency',
      labelFormat: '{value}%'
    };

    this.title = 'Efficiency of oil-fired power production';
  }

  // Trigger print
  public print(): void {
    this.chartObj?.print();
  }

  // beforePrint: customize what gets printed
  public onBeforePrint(args: IPrintEventArgs): void {
    // Clone the chart element so we can safely modify the print content
    console.log("before print event was triggered");
    const cloned = (this.chartObj?.element.cloneNode(true) as HTMLElement) ?? undefined;
    if (!cloned) { return; }

    // Example: add a simple watermark to the print content
    const watermark = document.createElement('div');
    watermark.textContent = 'CONFIDENTIAL';
    Object.assign(watermark.style, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) rotate(-30deg)',
      color: 'rgba(0,0,0,0.15)',
      fontSize: '48px',
      fontWeight: '700',
      pointerEvents: 'none',
      zIndex: '1',
      whiteSpace: 'nowrap'
    } as CSSStyleDeclaration);

    // Wrap cloned chart and overlay watermark
    const wrapper = document.createElement('div');
    Object.assign(wrapper.style, { position: 'relative' } as CSSStyleDeclaration);
    wrapper.appendChild(cloned);
    wrapper.appendChild(watermark);
    args.htmlContent = wrapper;
  }
}
