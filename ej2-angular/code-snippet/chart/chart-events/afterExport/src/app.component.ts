import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import {
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
  SplineSeriesService,
  ILoadedEventArgs,
  IAfterExportEventArgs
} from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';

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
      <ejs-chart id="chart-container"
        [primaryXAxis]="primaryXAxis"
        [primaryYAxis]="primaryYAxis"
        [title]="title"
        (loaded)="loaded($event)"
        (afterExport)="afterExport($event)">
        <e-series-collection>
          <e-series [dataSource]="data" type="Radar" xName="x" yName="y" drawType="Line"></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  `
})
export class AppComponent implements OnInit {
  public primaryXAxis?: Object;
  public title?: string;
  public primaryYAxis?: Object;
  public data?: Object[];
  public loaded!: (args: ILoadedEventArgs) => void;

  ngOnInit(): void {
    this.data = [
      { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 },
      { x: 2008, y: 27 }, { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
    ];

    this.primaryXAxis = {
      title: 'Year', coefficient: 90,
      minimum: 2004, maximum: 2012, interval: 1
    };

    this.primaryYAxis = {
      minimum: 20, maximum: 40, interval: 5,
      title: 'Efficiency',
      labelFormat: '{value}%'
    };

    this.title = 'Efficiency of oil-fired power production';

    // Trigger an export after the chart loads (for demo)
    this.loaded = (args: ILoadedEventArgs) => {
      args.chart.exportModule.export('PNG', 'export');
    };
  }

  // afterExport event handler - invoked after export completes
  public afterExport(args: IAfterExportEventArgs): void {
    // Common post-export tasks: notify user, log, or use returned data
    console.log('Chart after export event was triggered', args);
  }
}
