

import { Component, OnInit } from '@angular/core';
import { percentData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingStepArea' xName='x' yName='y' name='USA' [border]='border' dashArray='5.5'></e-series>
            <e-series [dataSource]='chartData' type='StackingStepArea' xName='x' yName='y1' name='UK' [border]='border' dashArray='5.5'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public border?: Object;
    ngOnInit(): void {
        this.chartData = percentData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.border={ width: 2, color: 'yellow' };
        this.title = 'Annual Temperature Comparison';
    }

}


