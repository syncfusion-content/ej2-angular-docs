

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { chartData } from './datasource';

@Component({
    selector: 'app-container',
    template:
            `<ejs-stockchart id='chartcontainer' style="display:block;" [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
              [chartArea]= 'chartArea'>
            <e-stockchart-indicators>
                <e-stockchart-indicator type='Tma' [dataSource]='data' xName='x' field="Close" high='high' low='low' open='open' fill="blue"
                close='close' volume='volume'> </e-stockchart-indicator>
            </e-stockchart-indicators>
        </ejs-stockchart>`
})
export class AppComponent implements OnInit {
 public data: Object[] = chartData;
    public primaryXAxis: Object = {
        title: 'Months',
        valueType: 'DateTime',
        intervalType: 'Months',
        majorGridLines: { width: 0}
    };
    public primaryYAxis: Object = {
        title: 'Price',
        labelFormat: '${value}',
        minimum: 30, maximum: 180,
        interval: 30,
    };
    public title: string = 'AAPL 2012-2017';
    public chartArea : Object = {
      border: { width : 0}
    };
    constructor() {
        //code
    } ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
;
}


