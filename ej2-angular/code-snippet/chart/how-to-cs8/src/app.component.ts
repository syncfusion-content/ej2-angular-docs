

import { Component, OnInit } from '@angular/core';
import { IPointRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
         <e-annotations>
            <e-annotation  content='<div id="chart_cloud" style="font-size:450%; opacity: 0.3;" >syncfusion</div>'
            x='Wed' y= 20 coordinateUnits= 'Point' horizontalAlignment='Center'>
            </e-annotation>
            <e-annotation  content='<div id="chart" > <a href="https://www.syncfusion.com" target="_blank">www.syncfusion.com</a></div>'
            x=400 y=440 coordinateUnits='Pixel' horizontalAlignment='Center'>
            </e-annotation>
        </e-annotations>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Spline' xName='x' yName='y' name='Max Temp' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData =[
                    { x: 'Sun', y: 15 }, { x: 'Mon', y: 5 },{ x: 'Tue', y: 32 },
                    { x: 'Wed', y: 15 },{ x: 'Thu', y: 29 }, { x: 'Fri', y: 24 },
                    { x: 'Sat', y: 18 },
                ];
        this.primaryXAxis = {
          valueType: 'Category',
            interval: 1, majorGridLines: { width: 0 },
            labelIntersectAction: 'Rotate90'
        };
        this.primaryYAxis = {
             minimum: 0,
            maximum: 40,
            interval: 10,
        };
        this.marker = { visible: true};
        this.title =  'NC Weather Report - 2016';
    }
}


