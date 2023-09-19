

import { Component, OnInit } from '@angular/core';
import { cylindricalData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Bar' columnFacet='Cylinder' xName='x' yName='y' name='India'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = cylindricalData;
        this.title = 'Unemployment rate in percentage';
        this.primaryXAxis = {
            minimum: 2006,
            maximum: 2011,
            interval: 1
        };
        this.primaryYAxis = {
            minimum: 3,
            maximum: 12,
            interval: 1,
            title: 'Percentage'
        };
    }

}


