import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService,
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService, DataLabelService
 } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService,
        ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService, DataLabelService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [stackLabels]='stackLabels'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y' name='UK' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y1' name='Germany' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y2' name='France' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y3' name='Italy' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    primaryYAxis: any;
    public marker?: Object;
    public stackLabels?:Object;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.primaryXAxis = {
            title: 'Years',
            interval: 1,
            valueType: 'Category'
        };
        this.marker = { dataLabel: { visible: true } };
        this.stackLabels = { visible: true, fill: 'rgba(0, 123, 255, 0.5)', format: '{value}', angle: 45, rx: 10, ry: 10, margin: { left: 10, right: 10, top: 10, bottom: 10 }, border: { width: 2, color: '#000' }, font: { size: '14px', color: '#fff', weight: 'bold', family: 'Arial', textAlignment: 'Left' } };
        this.title = 'Mobile Game Market by Country';
    }

}
