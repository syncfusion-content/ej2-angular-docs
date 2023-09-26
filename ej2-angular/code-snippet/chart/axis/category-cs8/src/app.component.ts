

import { Component, OnInit } from '@angular/core';
import { tickData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Sales'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = tickData;
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.primaryYAxis = {
           title: 'Temperature (Fahrenheit)',
           opposedPosition: true
        };
        this.title = 'Temperature flow over months';
    }

}


