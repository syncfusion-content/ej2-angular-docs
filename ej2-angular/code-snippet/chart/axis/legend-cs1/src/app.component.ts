

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [legendSettings]='legendSettings' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='December 2007' width=2 [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y1' name='December 2008' width=2 [marker]='marker1'></e-series>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y2' name='December 2009' width=2 [marker]='marker2'></e-series>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y3' name='December 2010' width=2 [marker]='marker3'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    public marker1?: Object;
    public marker2?: Object;
    public marker3?: Object;
    public legendSettings?: Object;
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
            title: 'Countries',
            valueType: 'Category', interval: 1,
            labelIntersectAction : 'Rotate45'
        };
        this.primaryYAxis = {
            title: 'Penetration (%)',
            rangePadding: 'None', labelFormat: '{value}%',
            minimum: 0, maximum: 90
        };
        this.marker = { visible: true, width: 10, height: 10, shape: 'Diamond' };
        this.marker1 = { visible: true, width: 10, height: 10, shape: 'Pentagon' };
        this.marker2 = { visible: true, width: 10, height: 10, shape: 'Triangle' };
        this.marker3 = { visible: true, width: 10, height: 10, shape: 'Circle' };
        this.title = 'FB Penetration of Internet Audience';
        this.legendSettings = {
            padding: 10, shapePadding: 10,
            visible: true, border: {
                width: 2, color: 'grey'
            },
            width: '200'
        };
    }

}


