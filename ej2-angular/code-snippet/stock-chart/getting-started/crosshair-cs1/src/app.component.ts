


import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container"
    [title]='title' [crosshair]='crosshair'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='stockchartData' type='Candle' xName='date' High='high' Low='low' Open='open' Close ='close' Name='Apple'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public stockchartData?: Object[];
    public title?: string;
    crosshair?: Object;
    ngOnInit(): void {
        // Title for chart
        this.title = 'AAPL Historical';
        this.crosshair = { enable: true };
        this.stockchartData = chartData;
    }
}



