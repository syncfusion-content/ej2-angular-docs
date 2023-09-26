

import { Component, OnInit } from '@angular/core';
import { groupData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y' name='John' stackingGroup='JohnandAndrew'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y1' name='Andrew' stackingGroup='JohnandAndrew'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y2' name='Thomas' stackingGroup='ThomasandMichael'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y3' name='Michael' stackingGroup='ThomasandMichael'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = groupData;
        this.title = 'Sales by year';
    }

}


