import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { BarSeriesService, StackingBarSeriesService, CategoryService} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { barData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ BarSeriesService, StackingBarSeriesService, CategoryService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Bar' xName='x' yName='y' name='India' fill='yellow' dashArray='5.5' opacity='0.8' [border]='border'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    public border?: Object;
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.border = {
            color: 'brown',
            width: 1
        };
        this.chartData = barData;
        this.title = 'Unemployment rate (%)';
    }

}


