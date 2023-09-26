

import { Component, OnInit } from '@angular/core';
import { stackData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingBar100' xName='x' yName='y' name='Apple' fill='yellow' [border]='border' dashArray='5.5'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar100' xName='x' yName='y1' name='Orange' fill='green' [border]='border1' dashArray='5.5'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar100' xName='x' yName='y2' name='Wastage' fill='blue' [border]='border2' dashArray='5.5'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public border?: Object;
    public border1?: Object;
    public border2?: Object;
    public chartData?: Object[];
    public title?: string;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = stackData;
        this.border = {
            width: 2,
            color: 'brown'
        };
        this.border1 = {
            width: 2,
            color: 'red'
        };
        this.border2 = {
            width: 2,
            color: 'grey'
        };
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Months'
        };
        this.title = 'Sales Comparison';    
    }

}


