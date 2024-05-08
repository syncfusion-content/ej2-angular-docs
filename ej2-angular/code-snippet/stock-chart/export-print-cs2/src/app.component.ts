import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, StockChartAllModule, ChartAllModule} from '@syncfusion/ej2-angular-charts'
import { CategoryService, ColumnSeriesService, LegendService, DataLabelService} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, StockChartAllModule, ChartAllModule
    ],

providers: [ CategoryService, ColumnSeriesService, LegendService, DataLabelService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title' [exportType]='exportType'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Candle' xName='date' yName='open' name='India' width=2 ></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public exportType: string[] = [];
    ngOnInit(): void {
        this.chartData = chartData;
        this.title = 'Efficiency of oil-fired power production';
        this.primaryXAxis = {
           valueType: 'DateTime'
        };
    }

}


