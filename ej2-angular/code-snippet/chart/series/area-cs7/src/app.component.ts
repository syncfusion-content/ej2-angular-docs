

import { Component, OnInit } from '@angular/core';
import { stackedStepData1, stackedStepData2 } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container">
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingStepArea' xName='x' yName='y'></e-series>
            <e-series [dataSource]='chartData2' type='StackingStepArea' xName='x' yName='y'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public chartData2?: Object[];
    ngOnInit(): void {
        this.chartData = stackedStepData1;
        this.chartData2 = stackedStepData2;
    }
}


