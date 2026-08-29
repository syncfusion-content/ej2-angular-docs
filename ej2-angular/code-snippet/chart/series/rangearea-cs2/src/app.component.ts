import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { RangeAreaSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [RangeAreaSeriesService, CategoryService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='RangeArea' xName='x' high='high' low='low' name='India' opacity='0.5'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = {
           title: 'Month',valueType: 'Category',
           edgeLabelPlacement: 'Shift'
        };
        this.primaryYAxis = {
            title: 'Temperature(Celsius)',
            minimum: 0, maximum: 20
        };
        this.title = 'Maximum and Minimum Temperature'
    }
}
