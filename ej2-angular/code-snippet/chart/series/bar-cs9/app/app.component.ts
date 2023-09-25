

import { Component, OnInit } from '@angular/core';
import { cylindricalData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingBar100' columnFacet= 'Cylinder' xName='x' yName='y'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar100' columnFacet= 'Cylinder' xName='x' yName='y1'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar100' columnFacet= 'Cylinder' xName='x' yName='y2'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = cylindricalData;
    }
}


