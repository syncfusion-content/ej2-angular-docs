

import { Component, OnInit } from '@angular/core';
import { splineData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' isTransposed='true'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Spline' xName='x' yName='y' name='London' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = splineData;
        this.primaryXAxis = {
           title: 'Month',
           valueType: 'Category'
        };
        this.marker = { visible: true, width: 10, height: 10 };
        this.primaryYAxis = {
            minimum: -5, maximum: 35, interval: 5,
            title: 'Temperature in Celsius',
            labelFormat: '{value}C'
        };
        this.title = 'Climate Graph-2012';
    }

}


