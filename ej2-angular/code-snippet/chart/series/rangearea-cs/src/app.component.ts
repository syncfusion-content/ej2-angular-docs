

import { Component, OnInit } from '@angular/core';
import { rangeData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='RangeArea' xName='x' high='high' low='low' name='India' fill='#69D2E7' opacity=0.6 dashArray='5.5' [border]='border'></e-series>
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
        this.chartData = rangeData;
        this.border = {
            width: 2,
            color: 'blue'
        }
        this.primaryXAxis = {
           title: 'Month',valueType: 'Category',
           edgeLabelPlacement: 'Shift'
        };
        this.primaryYAxis = {
            title: 'Temperature(Celsius)',
            minimum: 0, maximum: 20
        };
        this.title = 'Maximum and Minimum Temperature'
    }
}



