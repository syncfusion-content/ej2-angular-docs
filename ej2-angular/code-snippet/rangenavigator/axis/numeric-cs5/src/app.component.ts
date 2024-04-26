import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts'
import {  StepLineSeriesService} from '@syncfusion/ej2-angular-charts'




import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         ChartModule, RangeNavigatorModule
    ],

providers: [ StepLineSeriesService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" [value]='value' [majorGridLines]='majorGridLines'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='StepLine' xName='xData' yName='yData' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    public majorGridLines?: Object[];
    ngOnInit(): void {
        this.value = [25, 40];
        this.chartData = [
                            { xData: 10, yData: 35 }, { xData: 20, yData: 28 },
                            { xData: 30, yData: 34 }, { xData: 40, yData: 32 },
                            { xData: 50, yData: 40 }
                         ];
        this.majorGridLines = [{ width: 4, color: 'blue', dashArray: '5,5' }];

    }
}



