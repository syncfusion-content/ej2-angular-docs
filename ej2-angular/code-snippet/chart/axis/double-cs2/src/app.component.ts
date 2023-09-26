

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' name='England'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = [
             { x: 1, y: 7 }, { x: 2, y: 1 }, { x: 3, y: 1 },
             { x: 4, y: 14 }, { x: 5, y: 1 }, { x: 6, y: 10 },
             { x: 7, y: 8 }, { x: 8, y: 6 }, { x: 9, y: 10 },
             { x: 10, y: 10 }, { x: 11, y: 16 }, { x: 12, y: 6 },
             { x: 13, y: 14 }, { x: 14, y: 7 }, { x: 15, y: 5 },
             { x: 16, y: 2 }, { x: 17, y: 14 }, { x: 18, y: 7 },
             { x: 19, y: 7 }, { x: 20, y: 10 }
        ];
        this.primaryXAxis = {
            valueType: 'Double',
            minimum: 1,
            maximum: 20,
            interval: 5,
            title: 'Overs'
        };
        this.primaryYAxis = {
           title: 'Runs',
           minimum: 0,
           maximum: 20,
           interval: 10
        };
        this.title = 'England - Run Rate';
    }

}


