

import { Component, OnInit } from '@angular/core';
import { areaData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' name='Product A' width=2 [border]='border' opacity=0.5></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    public border?: Object;
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.border = {
          width: 1.5
        };
        this.chartData = areaData;
        this.title = 'Average Sales Comparison';
    }

}


