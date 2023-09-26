

import { Component, OnInit } from '@angular/core';
import { dateData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'
    [legendSettings]='legendSettings'>
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
    public legendSettings: Object = { visible: false};
    ngOnInit(): void {
        this.chartData = dateData;
        this.primaryXAxis = {
            valueType: 'DateTime',
            title: 'Sales Across Years',
            labelFormat: 'yMMM',
            edgeLabelPlacement: 'Shift',
            minimum: new Date(2000, 6, 1),
            maximum: new Date(2010, 6, 1)
        };
        this.primaryYAxis = {
           title: 'Sales Amount in millions(USD)'
        };
        this.title = 'Average Sales Comparison';
    }

}


