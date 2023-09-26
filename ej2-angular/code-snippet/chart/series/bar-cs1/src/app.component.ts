

import { Component, OnInit } from '@angular/core';
import { barData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Bar' xName='x' yName='y' name='India'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = barData;
        this.title = 'Unemployment rate (%)';
    }

}


