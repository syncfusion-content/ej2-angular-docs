

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart style='display:block;' id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
                [title]='title' >
                <e-series-collection>
                    <e-series [dataSource]='data' type='Hilo' xName='x' high='high' low='low' name='India' fill='blue'> </e-series>
                </e-series-collection>
     </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];

    ngOnInit(): void {
        this.data = [
            { x: 'Jan', low: 87, high: 200 }, { x: 'Feb', low: 45, high: 135 },
            { x: 'Mar', low: 19, high: 85 }, { x: 'Apr', low: 31, high: 108 },
            { x: 'May', low: 27, high: 80 }, { x: 'June', low: 84, high: 130 },
            { x: 'July', low: 77, high: 150 }, { x: 'Aug', low: 54, high: 125 },
            { x: 'Sep', low: 60, high: 155 }, { x: 'Oct', low: 60, high: 180 },
            { x: 'Nov', low: 88, high: 180 }, { x: 'Dec', low: 84, high: 230 }
            ];
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Months'
            };
        this.primaryYAxis = {
            labelFormat: '{value}mm',
            edgeLabelPlacement: 'Shift',
            title: 'Rainfall',
            };
        this.title = 'Maximum and Minimum Rainfall';
    }
}


