import { ChartModule, CategoryService, CandleSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, CandleSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Candle' xName='x' high='high' low='low' open='open' close='close' name='SHIRPUR-G' [emptyPointSettings]='emptyPointSettings'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    public emptyPointSettings?: Object;

    ngOnInit(): void {
        this.data = chartData;
        this.primaryXAxis = {
            title: 'Date',
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Price',
            minimum: 100,
            maximum: 200,
            interval: 20
        };
        this.emptyPointSettings = {
            mode: 'Average'
        };
        this.title = 'Shirpur Gold Refinery Share Price';
    }
}
