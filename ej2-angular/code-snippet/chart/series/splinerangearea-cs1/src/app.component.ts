import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import {  CategoryService, SplineRangeAreaSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { splinedata } from './datasource';

@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [CategoryService, SplineRangeAreaSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='SplineRangeArea' xName='x' high='high' low='low' name='England' opacity='0.5'></e-series>
            <e-series [dataSource]='chartData' type='SplineRangeArea' xName='x' high='high1' low='low1' name='India' opacity='0.5'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = splinedata;
        this.primaryXAxis = {
           valueType: 'Category',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 40,
            majorTickLines: { width: 0 }
        };
        this.title = 'Monthly Temperature Range'
    }
}
