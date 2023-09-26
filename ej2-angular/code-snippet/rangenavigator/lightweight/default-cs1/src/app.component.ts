


import { Component, OnInit } from '@angular/core';
import { GetDateTimeData } from './datasource'

@Component({
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" valueType='DateTime' [value]='value' intervalType='Months'[labelFormat]='labelFormat' [labelStyle]='labelStyle' [dataSource]='chartData' xName='x' yName='y'></ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    public tooltip?: Object;
    public labelFormat?: string;
    public labelStyle?: Object;
    ngOnInit(): void {
        this.value = [new Date(2018, 5, 1), new Date(2018, 6, 1)];
        this.chartData = GetDateTimeData(new Date(2018, 0, 1), new Date(2019, 0, 1));
        this.labelFormat = 'MMM';
        this.labelStyle= { color: 'red', size:'10px'};
    }
}



