import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { BarSeriesService, StackingBarSeriesService, CategoryService, IPointRenderEventArgs} from '@syncfusion/ej2-angular-charts'



import { Component, OnInit } from '@angular/core';
import { barData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ BarSeriesService, StackingBarSeriesService, CategoryService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Bar' xName='x' yName='y' name='India'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = barData;
        this.title = 'Unemployment rate (%)';
    }
    public pointRender(args: IPointRenderEventArgs): void {
        if (args.point.index === 1) {
            args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
        }
        if (args.point.index === 4) {
            args.cornerRadius = { topLeft: 0, bottomLeft: 0, topRight: 10, bottomRight: 10 };
        }
    };

}


