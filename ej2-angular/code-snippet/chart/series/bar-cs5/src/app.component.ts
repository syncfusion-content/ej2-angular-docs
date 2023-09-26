

import { Component, OnInit } from '@angular/core';
import { groupData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Bar' xName='x' yName='y' name='John' groupName='JohnandAndrew'></e-series>
            <e-series [dataSource]='chartData' type='Bar' xName='x' yName='y1' name='Andrew' groupName='JohnandAndrew' columnWidth='0.6'></e-series>
            <e-series [dataSource]='chartData' type='Bar' xName='x' yName='y2' name='Thomas' groupName='ThomasandMichael'></e-series>
            <e-series [dataSource]='chartData' type='Bar' xName='x' yName='y3' name='Michael' columnWidth='0.6' groupName='ThomasandMichael'></e-series>
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


