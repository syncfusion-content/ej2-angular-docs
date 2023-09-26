

import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y' name='Organic'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y1' name='Fair-trade'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y2' name='Veg Alternatives'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y3' name='Others'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.title = 'Trend in Sales of Ethical Produce';
    }

}


