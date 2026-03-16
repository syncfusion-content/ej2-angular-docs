import { Component, OnInit } from '@angular/core';
import { ChartModule, CategoryService, ColumnSeriesService, LegendService, SelectionService, ISeriesRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService, LegendService, SelectionService],
    standalone: true,
    selector: 'app-container',
    template: `
    <ejs-chart
      id="chart-container"
      [primaryXAxis]="primaryXAxis"
      [primaryYAxis]="primaryYAxis"
      [title]="title"
      selectionMode="Point"
      (seriesRender)="onSeriesRender($event)"
    >
      <e-series-collection>
        <e-series [dataSource]="chartData" type="Column" xName="country" yName="gold" name="Gold"></e-series>
        <e-series [dataSource]="chartData" type="Column" xName="country" yName="silver" name="Silver"></e-series>
        <e-series [dataSource]="chartData" type="Column" xName="country" yName="bronze" name="Bronze"></e-series>
      </e-series-collection>
    </ejs-chart>
  `
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;

    ngOnInit(): void {
        this.chartData = [
            { country: 'USA', gold: 50, silver: 70, bronze: 45 },
            { country: 'China', gold: 40, silver: 60, bronze: 55 },
            { country: 'Japan', gold: 70, silver: 60, bronze: 50 },
            { country: 'Australia', gold: 60, silver: 56, bronze: 40 },
            { country: 'France', gold: 50, silver: 45, bronze: 35 },
            { country: 'Germany', gold: 40, silver: 30, bronze: 22 },
            { country: 'Italy', gold: 40, silver: 35, bronze: 37 },
            { country: 'Sweden', gold: 30, silver: 25, bronze: 27 }
        ];

        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Countries'
        };

        this.primaryYAxis = {
            title: 'Medals'
        };

        this.title = 'Olympic Medals';
    }

    // seriesRender is deprecated, but this shows how to customize series before render
    public onSeriesRender(args: ISeriesRenderEventArgs): void {
      console.log('Series render event was triggered');
        const palette = ['#f9c74f', '#90be6d', '#577590'];
        args.series.fill = palette[args.series.index] || '#7f8c8d';
        args.series.opacity = 0.9;
        args.series.border = { width: 1, color: '#ffffff' };
        args.series.columnWidth = 0.6;
        (args.series as any).cornerRadius = { topLeft: 6, topRight: 6 };
    }
}
