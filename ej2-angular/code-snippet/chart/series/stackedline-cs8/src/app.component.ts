import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { ISeriesRenderEventArgs } from '@syncfusion/ej2-charts'
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
    template: `<ejs-chart id="chart-container" (seriesRender)='seriesRender($event)' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y' name='John' [marker]='marker'> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y1' name='Peter' [marker]='marker'> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y2' name='Steve' [marker]='marker'> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y3' name='Charle' [marker]='marker'> </e-series>
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
    public emptyPointSettings?: Object;
    public emptyPointSettings1?: Object;
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
    public seriesRender(args: ISeriesRenderEventArgs) {
        if (args.series.index === 0) {
            args.fill = '#ff4251';
        }
        else if (args.series.index === 1) {
            args.fill = '#4C4C4C';
        }
        else if (args.series.index === 2) {
            args.fill = '#794F1B';
        }
        else if (args.series.index === 3) {
            args.fill = '#1a9a6f';
        }
    }

}
