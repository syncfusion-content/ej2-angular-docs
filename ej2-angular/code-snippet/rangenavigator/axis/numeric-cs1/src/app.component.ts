import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts'
import {  StepLineSeriesService} from '@syncfusion/ej2-angular-charts'




import { Component, OnInit } from '@angular/core';
import { double } from './datasource'

@Component({
imports: [
         ChartModule, RangeNavigatorModule
    ],

providers: [ StepLineSeriesService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" [value]='value'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='StepLine' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    ngOnInit(): void {
        this.value = [12,30];
        this.chartData = double;
    }
}



