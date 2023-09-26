

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='RangeStepArea' xName='x' high='high' low='low' opacity=0.4 fill='red' [border]='border'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData: Object[] =  [
        { x: 'Jan', high: 14, low: 7, high1: 29, low1: 19 },
        { x: 'Feb', high: 17, low: 7, high1: 32, low1: 22 },
        { x: 'Mar', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Apr', high: 22, low: 12, high1: 37, low1: 27 },
        { x: 'May', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Jun', high: 17, low: 7, high1: 32, low1: 22 },
        { x: 'Jul', high: 15, low: 5, high1: 30, low1: 20 },
        { x: 'Aug', high: 17, low: 7, high1: 32, low1: 22 },
        { x: 'Sep', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Oct', high: 22, low: 12, high1: 37, low1: 27 },
        { x: 'Nov', high: 20, low: 10, high1: 35, low1: 25 },
        { x: 'Dec', high: 20, low: 7, high1: 32, low1: 22 }
    ];
    public title?: string;
    public primaryYAxis?: Object;
    public border?: Object;
    ngOnInit(): void {
        this.primaryXAxis = {
           valueType: 'Category',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 40,
            majorTickLines: { width: 0 }
        };
        this.border={
            width: 2,
            color: 'black'
        };
        this.title = 'Monthly Temperature Range'
    }
}



