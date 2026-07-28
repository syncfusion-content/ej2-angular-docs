import { Component, OnInit } from '@angular/core';
import { StockChartModule, DateTimeService, CandleSeriesService } from '@syncfusion/ej2-angular-charts';
import { AxisModel } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [StockChartModule],
    providers: [DateTimeService, CandleSeriesService],
    template: `
        <ejs-stockchart
            id="stock-chart-container"
            [primaryXAxis]='primaryXAxis'
        >
            <e-stockchart-series-collection>
                <e-stockchart-series
                    [dataSource]='stockchartData'
                    type='Candle'
                    xName='date'
                    high='high'
                    low='low'
                    open='open'
                    close='close'
                    volume='volume'
                >
                </e-stockchart-series>
            </e-stockchart-series-collection>
        </ejs-stockchart>
    `
})
export class App implements OnInit {
    public primaryXAxis?: AxisModel;
    public stockchartData?: Object[];
    ngOnInit(): void {
        this.stockchartData = [
            {
                date: new Date('2012-04-02'),
                open: 85.9757,
                high: 90.6657,
                low: 85.7685,
                close: 90.5257,
                volume: 660187068
            },
            {
                date: new Date('2012-04-09'),
                open: 89.4471,
                high: 92,
                low: 86.2157,
                close: 86.4614,
                volume: 912634864
            },
            {
                date: new Date('2012-04-16'),
                open: 87.1514,
                high: 88.6071,
                low: 81.4885,
                close: 81.8543,
                volume: 1221746066
            },
            {
                date: new Date('2012-04-23'),
                open: 81.5157,
                high: 88.2857,
                low: 79.2857,
                close: 86.1428,
                volume: 965935749
            },
            {
                date: new Date('2012-04-30'),
                open: 85.4,
                high: 85.4857,
                low: 80.7385,
                close: 80.75,
                volume: 615249365
            },
            {
                date: new Date('2012-05-07'),
                open: 80.2143,
                high: 82.2685,
                low: 79.8185,
                close: 80.9585,
                volume: 541742692
            },
            {
                date: new Date('2012-05-14'),
                open: 80.3671,
                high: 81.0728,
                low: 74.5971,
                close: 75.7685,
                volume: 708126233
            },
            {
                date: new Date('2012-05-21'),
                open: 76.3571,
                high: 82.3571,
                low: 76.2928,
                close: 80.3271,
                volume: 682076215
            },
            {
                date: new Date('2012-05-28'),
                open: 81.5571,
                high: 83.0714,
                low: 80.0743,
                close: 80.1414,
                volume: 480059584
            },
            {
                date: new Date('2012-06-04'),
                open: 80.2143,
                high: 82.9405,
                low: 78.3571,
                close: 82.9028,
                volume: 517577005
            }
        ];
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
    }
}