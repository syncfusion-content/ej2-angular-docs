

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public primaryYAxis?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData =  [{ x: new Date(2000, 0, 1), y: 10 }, { x: new Date(2002, 0, 1), y: 40 },
    { x: new Date(2004, 0, 1), y: 20 }, { x: new Date(2006, 0, 1), y: 50 },
    { x: new Date(2008, 0, 1), y: 15 }, { x: new Date(2010, 0, 1), y: 30 }];
        this.primaryXAxis = {
            valueType: 'DateTime', intervalType: 'Years',
       stripLines:[
            {start:new Date(2002, 0, 1) , size: 2, sizeType: 'Years', color: 'rgba(167,169,171, 0.3)'}
            ]
        };
        this.primaryYAxis = {
           minimum: 0, maximum: 60, interval: 10
        };
       this.marker = { visible: true }
    }

}


