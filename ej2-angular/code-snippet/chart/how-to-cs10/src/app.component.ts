

import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs, Series } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-chart style='display:block' align='center' id='chartcontainer' [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [tooltip]='tooltip' (load)='load($event)'[zoomSettings]='zoomSettings' >
            <e-series-collection>
                <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Germany' width=2 [marker]='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public primaryYAxis?: Object;
    public tooltip: Object = {
        enable: true
    };
    public load(args: ILoadedEventArgs): void {
       args.chart.zoomModule.isZoomed = true;
    };
     public zoomSettings: Object = {
        mode: 'X',
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        enableScrollbar: true
    };
    ngOnInit(): void {
        this.chartData =[
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 21 },
    { x: new Date(2011, 0, 1), y: 24 },
    { x: new Date(2012, 0, 1), y: 36 },
    { x: new Date(2013, 0, 1), y: 38 },
    { x: new Date(2014, 0, 1), y: 54 },
    { x: new Date(2015, 0, 1), y: 21 },
    { x: new Date(2016, 0, 1), y: 24 },
    { x: new Date(2017, 0, 1), y: 36 },
    { x: new Date(2018, 0, 1), y: 38 },
                ];
        this.primaryXAxis = {
        zoomFactor: 0.3,
        valueType: 'DateTime',
        labelFormat: 'y',
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift',
        };
        this.primaryYAxis = {
        labelFormat: '{value}%',
        rangePadding: 'None',
        minimum: 0,
        maximum: 100,
        interval: 20,
        };
        this.marker = {  visible: true,
        height: 10,
        width: 10 };
        this.title =  'NC Weather Report - 2016';
    }
}


