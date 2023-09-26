

import { Component, OnInit } from '@angular/core';
import { stripData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' [marker]='marker'></e-series>>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public primaryYAxis?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = [
            {x: 1, y: 5},{x: 2, y: 39},{x: 3, y: 21},{x: 4, y: 51},{x: 5, y: 30},
            {x: 6, y: 25},{x: 7, y: 10},{x: 8, y: 40},{x: 9, y: 50},{x: 10, y: 20}
            ];
        this.primaryYAxis = {
           minimum: 0, maximum: 60, interval: 10,
        stripLines:[
            { start: 30, size: 2, sizeType: 'Pixel', dashArray:"10,5", color: "red"}
        ]
        };
        this.marker = { visible: true }
    }

}


