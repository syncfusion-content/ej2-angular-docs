import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts'
import { AreaSeriesService, DateTimeService} from '@syncfusion/ej2-angular-charts'




import { Component, OnInit } from '@angular/core';
import { datasrc } from './datasource'

@Component({
imports: [
         ChartModule, RangeNavigatorModule
    ],

providers: [ AreaSeriesService, DateTimeService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" valueType='DateTime' [value]='value' labelFormat='MMM-yy' [animationDuration]='animationDuration'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='Area' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    public animationDuration?: number;
    ngOnInit(): void {
        this.value = [new Date('2017-09-01'), new Date('2018-02-01')];
        this.chartData = datasrc;
        this.animationDuration=2000;

    }
}



