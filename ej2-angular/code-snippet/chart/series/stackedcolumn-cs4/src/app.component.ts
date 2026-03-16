import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService,
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService
 } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService,
        ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService,],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y' name='UK'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y1' name='Germany'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y2' name='France'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y3' name='Italy'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public border?: Object;
    public border1?: Object;
    public border2?: Object;
    public border3?: Object;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.primaryXAxis = {
            title: 'Years',
            interval: 1,
            valueType: 'Category'
        };
        this.title = 'Mobile Game Market by Country';
        this.border = { width: 2, color: '#ff4251', dashArray: '2,5'};
        this.border1 = { width: 2, color: '#4C4C4C', dashArray: '2,5'};
        this.border2 = { width: 2, color: '#794F1B', dashArray: '2,5'};
        this.border3 = { width: 2, color: '#1a9a6f', dashArray: '2,5'};
    }

}
