import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
    SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { paretoData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
        SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Pareto' xName='x' yName='y' name='Defect' width=2 opacity="0.75" [cornerRadius]="cornerRadius" columnWidth="0.4" [emptyPointSettings]='emptyPointSettings' [paretoOptions]='paretoOptions'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public tooltip?: Object;
    public emptyPointSettings?: Object;
    public cornerRadius: Object = {
        topLeft: Browser.isDevice ? 4 : 6, topRight: Browser.isDevice ? 4 : 6
    };
    public paretoOptions: Object = {
        marker: { visible: true, isFilled: true, width: 7, height: 7 },
        fill: '#F7523F',
        width: 2,
    };
    ngOnInit(): void {
        this.chartData = paretoData;
        this.primaryXAxis = {
            interval: 1,
            valueType: 'Category',
            majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelIntersectAction: 'Rotate90'
        };
        this.primaryYAxis = {
            title: 'Frequency of Occurence',
            minimum: 0,
            maximum: 25,
            interval: 5,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
            minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
        };
        this.tooltip = { enable: true, shared: true, format: '${series.name} : <b>${point.y}</b>' };
        this.title = 'Defects in Shirts';
        this.emptyPointSettings = {
            mode: 'Average', fill: 'red'
        }
    }

}
