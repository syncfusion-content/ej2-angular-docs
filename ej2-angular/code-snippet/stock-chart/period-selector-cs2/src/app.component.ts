import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, RangeNavigatorModule, StockChartAllModule, ChartAllModule} from '@syncfusion/ej2-angular-charts'
import { AreaSeriesService, DateTimeService, PeriodSelectorService} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, RangeNavigatorModule, StockChartAllModule, ChartAllModule
    ],

providers: [ AreaSeriesService, DateTimeService, PeriodSelectorService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [enablePeriodSelector]='enable' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [crosshair]='crosshair'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Line' xName='date' yName='open' name='India' width=2 ></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public crosshair?: Object;
    public enable: boolean = false;
    ngOnInit(): void {
        this.chartData = chartData;
        this.title = 'Efficiency of oil-fired power production';
        this.primaryXAxis = {
           valueType: 'DateTime',
           crosshairTooltip: {enable:true}
        };
        this.primaryYAxis = {
           majorTickLines: { color: 'transparent', width: 0 },
           crosshairTooltip: {enable:true}
        };
        this.crosshair= {
            enable: true
        };
    }

}


