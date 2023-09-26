

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings'>
        <e-series-collection>
            <e-series [dataSource]='chartData' [marker]='marker' type='Line' name='December 2007' xName='x' yName='y'></e-series>
            <e-series [dataSource]='chartData' [marker]='marker' type='Line' name='December 2008' xName='x' yName='y1'></e-series>
            <e-series [dataSource]='chartData' [marker]='marker' type='Line' name='December 2009' xName='x' yName='y2'></e-series>
            <e-series [dataSource]='chartData' [marker]='marker' type='Line' name='December 2010' xName='x' yName='y3'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public legendSettings?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = [
    { x: 'WW', y: 12, y1: 22, y2: 38.3, y3: 50 },
    { x: 'EU', y: 9.9, y1: 26, y2: 45.2, y3: 63.6 },
    { x: 'APAC', y: 4.4, y1: 9.3, y2: 18.2, y3: 20.9 },
    { x: 'LATAM', y: 6.4, y1: 28, y2: 46.7, y3: 65.1 },
    { x: 'MEA', y: 30, y1: 45.7, y2: 61.5, y3: 73 },
    { x: 'NA', y: 25.3, y1: 35.9, y2: 64, y3: 81.4 }
     ];
        this.primaryXAxis = {
           valueType: 'Category',
        };
        this.primaryYAxis = {
           minimum: 0, maximum: 80,
           interval: 20, title: 'Medals',
        };
        this.legendSettings = { width: '180', enablePages: false };
        this.title = 'Olympic Medals';
        this.marker = {
            visible: true,
            width: 10, height: 10,
            shape: 'Diamond'
        }
    }
}


