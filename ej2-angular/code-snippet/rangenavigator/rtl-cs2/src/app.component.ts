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
    template: `<ejs-rangenavigator id="rn-container" valueType='DateTime' [value]='value' [enableRtl]='enableRtl' labelFormat='MMM-yy'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='Area' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public enableRtl?: boolean;
    public chartData?: Object[];
    public value?: Object[];
    ngOnInit(): void {
        this.chartData = datasrc;
        this.value=[new Date('2017-09-01'), new Date('2018-02-01')];
        this.enableRtl = true;
    }
}



