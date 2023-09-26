

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Spline' xName='date' yName='open' width=2 name='China' [marker]='marker'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public tooltip?: Object;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.tooltip = { enable: true, header: 'Unemployment', format: '<b>${point.x} : ${point.y}</b>' };
        this.marker = { visible: true, width: 10, height: 10 };
        this.title = 'Unemployment Rates 1975-2010';

}

}
