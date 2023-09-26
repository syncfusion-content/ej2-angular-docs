

import { Component, OnInit } from '@angular/core';
import { series1 } from './datasource';
import { PeriodsModel } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title' [periods]='periods' [exportType]='exportType' [seriesType]='seriesType' [indicatorType]='indicatorType' [trendlineType]='trendlineType'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='India' width=2 ></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public periods?: PeriodsModel[];
    public seriesType: string[] = [];
    public indicatorType: string[] = [];
    public trendlineType: string[] = [];
    public exportType: string[] = [];
    ngOnInit(): void {
        this.chartData = series1;
        this.title = 'Efficiency of oil-fired power production';
        this.primaryXAxis = {
           valueType: 'DateTime'
        };
        this.periods = [
            { intervalType: 'Minutes', interval: 1, text: '1m' },
            { intervalType: 'Minutes', interval: 30, text: '30m' },
            { intervalType: 'Hours', interval: 1, text: '1H' },
            { intervalType: 'Hours', interval: 12, text: '12H', selected: true },
            { intervalType: 'Auto', text: '1D' }
        ];
    }
}


