


import { Component, OnInit } from '@angular/core';
import { GetDateTimeData } from './datasource'

@Component({
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" valueType='DateTime' [value]='value' [labelFormat]='labelFormat'   [dataSource]='chartData' xName='x' yName='y'></ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    public tooltip?: Object[];
    public labelFormat?: string;
    ngOnInit(): void {
        this.value = [new Date(2018, 4, 1), new Date(2018, 8, 1)];
        this.chartData = GetDateTimeData(new Date(2018, 0, 1), new Date(2019, 0, 1));
        this.labelFormat = 'MMM';
    }
}



