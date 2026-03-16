import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
    SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
        SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService],
standalone: true,
    selector: 'app-container',
    template: `
       <svg style="width:1px; height:1px">
        <defs>
            <linearGradient id="gradient1">
                <stop offset="0%" style="stop-color:coral;stop-opacity:5" />
                <stop offset="50%" style="stop-color:mediumseagreen;stop-opacity:5" />
            </linearGradient>
        </defs>
    </svg>

    <svg style="width:1px; height:1px">
        <defs>
            <linearGradient id="gradient2">
                <stop offset="0%" style="stop-color:darkred;stop-opacity:5" />
                <stop offset="50%" style="stop-color:darkorange;stop-opacity:5" />
            </linearGradient>
        </defs>
    </svg>

    <svg style="width:1px; height:1px">
        <defs>
            <linearGradient id="gradient3">
                <stop offset="0%" style="stop-color:darkmagenta;stop-opacity:5" />
                <stop offset="50%" style="stop-color:darkcyan;stop-opacity:5" />
            </linearGradient>
        </defs>
    </svg>

    <svg style="width:1px; height:1px">
        <defs>
            <linearGradient id="gradient4">
                <stop offset="0%" style="stop-color:darkviolet;stop-opacity:5" />
                <stop offset="50%" style="stop-color:darkgoldenrod;stop-opacity:5" />
            </linearGradient>
        </defs>
    </svg>
    <ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y' name='John'  [marker]='marker' [fill]="'url(#gradient1)'"> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y1' name='Peter'  [marker]='marker' [fill]="'url(#gradient2)'"> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y2' name='Steve'  [marker]='marker' [fill]="'url(#gradient3)'"> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y3' name='Charle'  [marker]='marker' [fill]="'url(#gradient4)'"> </e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    public series?: Object;
    public chartData?: Object[];
    ngOnInit(): void {
        this.primaryXAxis = {
            interval: 1, valueType: 'Category'
        };
        this.primaryYAxis =
        {
            title: 'Expense',
            interval: 100,
            labelFormat: '${value}',
        },
        this.chartData = chartData;
        this.marker = { visible: true };
    }

}
