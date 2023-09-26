

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Product X'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = [
                { x: new Date(1995, 0, 1), y: 80 }, { x: new Date(1996, 0, 1), y: 200 },
                { x: new Date(1997, 0, 1), y: 400 }, { x: new Date(1998, 0, 1), y: 600 },
                { x: new Date(1999, 0, 1), y: 700 }, { x: new Date(2000, 0, 1), y: 1400 },
                { x: new Date(2001, 0, 1), y: 2000 }, { x: new Date(2002, 0, 1), y: 4000 },
                { x: new Date(2003, 0, 1), y: 6000 }, { x: new Date(2004, 0, 1), y: 8000 },
                { x: new Date(2005, 0, 1), y: 11000 }
        ];
        this.primaryXAxis = {
            valueType: 'DateTime',
            title: 'Years',
            labelFormat: 'y'
        };
        this.primaryYAxis = {
           valueType: 'Logarithmic',
           title: 'Profit',
           logBase: 2
        };
        this.title = 'Product X Growth [1995-2005]';
    }

}


