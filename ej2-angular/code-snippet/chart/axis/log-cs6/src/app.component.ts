

import { Component, OnInit } from '@angular/core';
import { logData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Product X'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = logData;
        this.primaryXAxis = {
            valueType: 'DateTime',
            title: 'Years',
            labelFormat: 'y'
        };
        this.primaryYAxis = {
           valueType: 'Logarithmic',
           title: 'Profit',
           minimum: 100,
           maximum: 10000
        };
        this.title = 'Product X Growth [1995-2005]';
    }

}


