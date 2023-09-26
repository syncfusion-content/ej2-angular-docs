

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Candle' xName='date' yName='open' name='India' width=2 ></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    ngOnInit(): void {
        this.chartData = chartData;
        this.title = 'Efficiency of oil-fired power production';
        this.primaryXAxis = {
           valueType: 'DateTime',
        //Tick lines customization
             majorGridLines : {
                 color : 'blue',
                 width : 5
             },
             minorGridLines : {
                 color : 'red',
                 width : 0
             }
        };
        this.primaryYAxis = {
        //Tick lines customization
             majorGridLines : {
                 color : 'blue',
                 width : 5
             },
             minorGridLines : {
                 color : 'red',
                 width : 0
             }
        };
    }

}


