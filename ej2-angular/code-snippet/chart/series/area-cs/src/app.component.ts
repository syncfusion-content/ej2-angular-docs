

import { Component, OnInit } from '@angular/core';
import { areaData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' name='Product A' fill='#69D2E7' opacity=0.6 [border]='border' dashArray='5.5'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public border?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = areaData;
        this.border = {
            width: 2,
            color: 'blue'
        }
        this.primaryXAxis = {
           title: 'Year',
           minimum: 1900, maximum: 2000, interval: 10,
           edgeLabelPlacement: 'Shift'
        };
        this.primaryYAxis = {
           minimum: 2, maximum: 5, interval: 0.5,
           title: 'Sales Amount in Millions'
        };
        this.title = 'Average Sales Comparison';
    }

}


