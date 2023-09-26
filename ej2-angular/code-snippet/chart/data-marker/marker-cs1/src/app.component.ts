

import { Component, OnInit } from '@angular/core';
import { markerData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='December 2007' width=2 [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y1' name='December 2008' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = markerData;
        this.primaryXAxis = {
            valueType: 'Category', interval: 1,
        };
        this.marker = { visible: true };
        this.title = 'FB Penetration of Internet Audience';
    }

}


