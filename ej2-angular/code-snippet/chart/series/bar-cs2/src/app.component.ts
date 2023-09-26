

import { Component, OnInit } from '@angular/core';
import { stackData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y' name='Apple'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y1' name='Orange'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y2' name='Wastage'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = stackData;
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Months'
        };
        this.title = 'Sales Comparison';
    }

}


