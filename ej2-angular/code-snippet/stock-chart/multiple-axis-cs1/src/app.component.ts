

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-stockchart-axes>
            <e-stockchart-axis rowIndex=1 name='yAxis1' opposedPosition='true' title='Temperature (Celsius)' [majorGridLines]='majorGridLines' labelFormat='{value}°C'
                   [minimum]='24' [maximum]='36' [interval]='2' [lineStyle]='lineStyle'>
            </e-stockchart-axis>
        </e-stockchart-axes>
        <e-stockchart-rows>
             <e-stockchart-row height='20%'></e-stockchart-row>
             <e-stockchart-row height='20%'></e-stockchart-row>
        </e-stockchart-rows>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Germany'></e-stockchart-series>
            <e-stockchart-series [dataSource]='chartData' type='Line' xName='x' yName='y1' name='Japan' yAxisName='yAxis1' [marker]='marker'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public majorGridLines?: Object;
    public primaryYAxis?: Object;
    public lineStyle?: Object;
    public marker?: Object;
    public rows?: Object;
    ngOnInit(): void {
        this.chartData = [
                { x: new Date(2000, 2, 11), y: 15, y1: 29 },
                { x: new Date(2000, 9, 14), y: 20, y1: 30 },
                { x: new Date(2001, 2, 11), y: 25, y1: 28 },
                { x: new Date(2001, 9, 16), y: 21, y1: 35 },
                { x: new Date(2002, 2, 7), y: 13, y1: 29 },
                { x: new Date(2002, 9, 7), y: 18, y1: 31 },
                { x: new Date(2003, 2, 11), y: 24, y1: 25 },
                { x: new Date(2003, 9, 14), y: 23, y1: 28 },
                { x: new Date(2004, 2, 6), y: 19, y1: 24 },
                { x: new Date(2004, 9, 6), y: 31, y1: 25 },
                { x: new Date(2005, 2, 11), y: 39, y1: 27 },
                { x: new Date(2005, 9, 11), y: 30, y1: 30 },
                { x: new Date(2006, 2, 11), y: 24, y1: 20 }
        ];
        this.primaryXAxis = {
            title: 'Months',
            valueType: 'DateTime',
            interval: 1
        };
        this.primaryYAxis = {
            minimum: 0, maximum: 90, interval: 20,
            lineStyle: { width: 0 },
            title: 'Temperature (Fahrenheit)',
            labelFormat: '{value}°F',
            span: 2
        };
        this.majorGridLines = { width: 0};
        this.lineStyle = { width: 0};
        this.marker = {
            visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' }
        }
        this.title = 'Multiple Axis';
    }

}


