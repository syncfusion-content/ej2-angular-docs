import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts'
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
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y' name='John' [marker]='marker'> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y' name='Peter' [marker]='marker > </e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y' name='Steve' [marker]='marker'> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y' name='Charle'[marker]='marker' > </e-series>
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
    public pointRender(args: IPointRenderEventArgs)  {
        if (args.point.y < 70) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}
