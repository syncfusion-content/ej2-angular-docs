

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
let series1 : any[] =[];
let yValue = [7.66, 8.03, 8.41, 8.97, 8.77, 8.20, 8.16, 7.89, 8.68, 9.48, 10.11, 11.36, 12.34, 12.60, 12.95,
    13.91, 16.21, 17.50, 22.72, 28.14, 31.26, 31.39, 32.43, 35.52, 36.36,
    41.33, 43.12, 45.00, 47.23, 48.62, 46.60, 45.28, 44.01, 45.17, 41.20, 43.41, 48.32, 45.65, 46.61, 53.34, 58.53];
let point1; let i; let j = 0;
for (i = 1973; i <= 2013; i++) {
    point1 = { x: i, y: yValue[j] };
    series1.push(point1); j++;
}
@Component({
    selector: 'app-container',
    template:
            `<ejs-chart id='chartcontainer'  [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
                [chartArea]= 'chartArea'>
            <e-series-collection>
                <e-series [dataSource]='data' type='Scatter' xName='x' yName='y' fill="#0066FF">
                     <e-trendlines>
                        <e-trendline [visible]=false type='Linear' width=3  name='Linear' fill='#C64A75'>
                        </e-trendline>
                    </e-trendlines>
                    </e-series>
            </e-series-collection>
        </ejs-chart>`
})


export class AppComponent implements OnInit {
    public data: Object[] = series1;
    public primaryXAxis: Object = {
        title: 'Months',
        majorGridLines: { width : 0}
    };
    public primaryYAxis: Object = {
       title: 'Rupees against Dollars',
       interval: 10, lineStyle: {width: 0}, majorTickLines: { width: 0 },
    };
    public chartArea : Object = {
      border: { width : 0}
    };
    public title: string = 'Historical Indian Rupee Rate (INR USD)';
    constructor() {
        //code
    }ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
;
}


