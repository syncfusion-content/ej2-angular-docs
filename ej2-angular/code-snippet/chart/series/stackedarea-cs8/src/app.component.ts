import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-angular-charts'
import {  StackingAreaSeriesService, DateTimeService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';

@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [StackingAreaSeriesService, DateTimeService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y' [marker]='marker' name='Organic'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y1' [marker]='marker' name='Fair-trade' ></e-series>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y2' [marker]='marker' name='Veg Alternatives'></e-series>
            <e-series [dataSource]='chartData' type='StackingArea' xName='x' yName='y3' [marker]='marker' name='Others'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.marker = {visible: true};
        this.title = 'Trend in Sales of Ethical Produce';
    }
    public pointRender(args: IPointRenderEventArgs) {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }

}
