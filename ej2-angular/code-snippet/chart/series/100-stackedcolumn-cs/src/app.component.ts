

import { Component, OnInit } from '@angular/core';
import { percentData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingColumn100' xName='x' yName='y' name='UK' fill='red' [border]='border'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn100' xName='x' yName='y1' name='Germany' fill='yellow' [border]='border'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn100' xName='x' yName='y2' name='France' fill='green' [border]='border'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn100' xName='x' yName='y3' name='Italy' fill='blue' [border]='border'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public border?: Object;
    public title?: string;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = percentData;
        this.border = {
            width: 2.5,
            color: 'brown'
        }
        this.primaryXAxis = {
            title: 'Years',
            interval: 1,
            valueType: 'Category'
        };
        this.title = 'Gross Domestic Product Growth';
    }

}


