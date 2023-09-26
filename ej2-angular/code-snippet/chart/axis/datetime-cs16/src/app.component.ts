

import { Component, OnInit } from '@angular/core';
import { dateData } from './datasource';
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
        this.chartData = dateData;
        this.primaryXAxis = {
            valueType: 'DateTime',
            title: 'Sales Across Years',
            labelFormat: 'yMMM',
            rangePadding: 'Additional'
        };
        this.title = 'Average Sales Comparison';
    }

}


