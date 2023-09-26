

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title' [indicatorType]='indicatorType' [trendlineType]='trendlineType' [legendSettings]='legendSettings'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Candle' volume='volume' xName='date' low='low' high='high' open='open' close='close' name='AAPL'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public indicatorType: string[] = [];
    public trendlineType: string[] = [];
    public legendSettings?: Object;
    ngOnInit(): void {
        this.chartData = chartData;
        this.title = 'AAPL Stock Price';
        this.primaryXAxis = {
           valueType: 'DateTime'
        };
        this.legendSettings = {
            visible: true,
            //Legend position as custom
            position:'Custom',
            location: { x: 200, y: 20 }
        };
    }
}


