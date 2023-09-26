

import { Component, OnInit } from '@angular/core';
import { stripData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' [marker]='marker'></e-series>>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = [
            {x: 1, y: 5},{x: 2, y: 39},{x: 3, y: 21},{x: 4, y: 51},{x: 5, y: 30},
            {x: 6, y: 25},{x: 7, y: 10},{x: 8, y: 40},{x: 9, y: 50},{x: 10, y: 20}
            ];
        this.primaryXAxis = {
            stripLines:[
            {start: 1, size: 1, isRepeat: true, repeatEvery: 2, color: 'rgba(167,169,171, 0.3)'}
        ]
        };
        this.marker = { visible: true }
    }

}


