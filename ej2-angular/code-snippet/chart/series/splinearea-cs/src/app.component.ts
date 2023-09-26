

import { Component, OnInit } from '@angular/core';
import { splineData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='SplineArea' xName='x' yName='y' name='London' width=2 [marker]='marker' fill='yellow' [border]='border'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    border?: Object;
    ngOnInit(): void {
        this.chartData = splineData;
        this.border = {
            width: 2.5,
            color: 'red'
        }
        this.primaryXAxis = {
           title: 'Month',
           valueType: 'Category'
        };
        this.marker = { visible: false, width: 10, height: 10 };
        this.title = 'Climate Graph-2012';
    }

}


