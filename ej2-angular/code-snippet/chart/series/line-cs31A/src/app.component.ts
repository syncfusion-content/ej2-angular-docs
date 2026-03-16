import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
    SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService, DataLabelService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
        SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService, DataLabelService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [stackLabels]='stackLabels'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y' name='John' width='2' [marker]='marker'> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y1' name='Peter' width='2' [marker]='marker'> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y2' name='Steve' width='2' [marker]='marker'> </e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y3' name='Charle' width='2' [marker]='marker'> </e-series>
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
    public stackLabels?:Object;
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
        this.marker = { dataLabel: { visible: true } };
        this.stackLabels = { visible: true, fill: 'rgba(0, 123, 255, 0.5)', format: '{value}', angle: 45, rx: 10, ry: 10, margin: { left: 10, right: 10, top: 10, bottom: 10 }, border: { width: 2, color: '#000' }, font: { size: '14px', color: '#fff', weight: 'bold', family: 'Arial', textAlignment: 'Left' } };
        this.chartData = chartData;
    }

}
