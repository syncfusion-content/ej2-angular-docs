import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts'
import { ColumnSeriesService} from '@syncfusion/ej2-angular-charts'




import { Component, OnInit } from '@angular/core';
import { datasrc } from './datasource';

@Component({
imports: [
         ChartModule, RangeNavigatorModule
    ],

providers: [ ColumnSeriesService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" [value]='value'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='Column' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    public tooltip?: Object[];
    public labelFormat?: string;
    ngOnInit(): void {
        this.value = [12,30];
        this.chartData = datasrc;
        this.labelFormat = 'MMM-yy';
    }
}



