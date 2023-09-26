

import { Component, OnInit } from '@angular/core';
import { percentData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y' name='USA'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y1' name='UK'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y2' name='Canada'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea100' xName='x' yName='y3' name='China'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = percentData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.title = 'Annual Temperature Comparison';
    }

}


