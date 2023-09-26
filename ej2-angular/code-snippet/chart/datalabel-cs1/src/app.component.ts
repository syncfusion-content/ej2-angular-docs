

import { Component, OnInit } from '@angular/core';
import { IPointRenderEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Female' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData =[
                   { x: 10, y: 7000, color: 'red' },
                   { x: 20, y: 1000, color: 'yellow' },
                   { x: 30, y: 12000, color: 'orange' },
                   { x: 40, y: 14000, color: 'skyblue' },
                   { x: 50, y: 11000, color: 'blue' },
                   { x: 60, y: 5000, color: 'green' },
                   { x: 70, y: 7300, color: 'pink' },
                   { x: 80, y: 9000, color: 'white' },
                   { x: 90, y: 12000, color: 'magenta' },
                   { x: 100, y: 14000, color: 'purple' },
                   { x: 110, y: 11000, color: 'teal' },
                   { x: 120, y: 5000, color: 'gray' },
                ];
        this.marker = { visible: true, dataLabel: { visible: true, name: 'color', template: '#index' }};
        this.title = 'Sales Rate in USA';
    }
}


