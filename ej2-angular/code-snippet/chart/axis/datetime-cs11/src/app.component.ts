

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Sales'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = data;
        this.primaryXAxis = {
              valueType: 'DateTimeCategory'
        };
        this.primaryYAxis = {
           title: 'Sales Amount in millions(USD)'
        };
        this.title = 'Average Sales Comparison';
    }

}


