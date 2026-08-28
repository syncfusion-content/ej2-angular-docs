import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, StackingStepAreaSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { percentData } from './datasource';
@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [DateTimeService, StackingStepAreaSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingStepArea' xName='x' yName='y' opacity='0.1' [border]='border' name='USA' noRisers='true'></e-series>
            <e-series [dataSource]='chartData' type='StackingStepArea' xName='x' opacity='0.1' [border]='border' yName='y1' name='UK' noRisers='true'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public step?: string;
    public border?: object;
    ngOnInit(): void {
        this.chartData = percentData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.title = 'Annual Temperature Comparison';
        this.step = 'Center';
        this.border = { width: 1.5 };
    }

}
