import { ChartModule } from '@syncfusion/ej2-angular-charts'
import {
    DateTimeService, AreaSeriesService, RangeAreaSeriesService
} from '@syncfusion/ej2-angular-charts'


import { Component } from '@angular/core';

@Component({
imports: [
         ChartModule
    ],

providers: [DateTimeService, AreaSeriesService, RangeAreaSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart style='display:block;' [chartArea]='chartArea' align='center' [title]='title' [primaryXAxis]='primaryXAxis'
        [primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Area' xName='x' yName='y' [marker]='marker' name='Product A' fill='rgba(0, 114, 189, 0.5)' opacity=0.5 width=2
            border-color='transparent' zOrder=1>
            </e-series>
            <e-series [dataSource]='data1' type='Area' xName='x' yName='y' [marker]='marker' name='Product B' fill='rgba(214, 39, 40, 0.5)' opacity=0.5
            width=2 border-color='transparent' zOrder=2>
            </e-series>
            <e-series [dataSource]='data2' type='RangeArea' xName='x' high='high' low='low' [marker]='marker' name='Product C'
            fill='rgba(162, 207, 87, 0.6)' opacity=1 width=2 border-color='transparent' zOrder=0>
            </e-series>
        </e-series-collection>
        </ejs-chart>`
})
export class AppComponent {
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    public data: Object[] = [
        { x: new Date(2000, 0, 1), y: 4 }, { x: new Date(2001, 0, 1), y: 3.0 },
        { x: new Date(2002, 0, 1), y: 3.8 }, { x: new Date(2003, 0, 1), y: 3.4 },
        { x: new Date(2004, 0, 1), y: 3.2 }, { x: new Date(2005, 0, 1), y: 3.9 }
    ];
    public data1: Object[] = [
        { x: new Date(2000, 0, 1), y: 2.6 }, { x: new Date(2001, 0, 1), y: 2.8 },
        { x: new Date(2002, 0, 1), y: 2.6 }, { x: new Date(2003, 0, 1), y: 3 },
        { x: new Date(2004, 0, 1), y: 3.6 }, { x: new Date(2005, 0, 1), y: 3 }
    ];
    public data2: Object[] = [
        { x: new Date(2000, 0, 1), high: 4, low: 2.6 },
        { x: new Date(2001, 0, 1), high: 3, low: 2.8 },
        { x: new Date(2002, 0, 1), high: 3.8, low: 2.6 },
        { x: new Date(2003, 0, 1), high: 3.4, low: 3 },
        { x: new Date(2004, 0, 1), high: 3.6, low: 3.2 },
        { x: new Date(2005, 0, 1), high: 3.9, low: 3 }
    ];
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'DateTime',
        labelFormat: 'y',
        majorGridLines: { width: 0 },
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift'
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Revenue in Millions',
        labelFormat: '{value}M',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    };
    public marker: Object = {
        visible: false
    };
    //Initializing Chart Title
    public title: string = 'Average Sales Comparison';
    constructor() {
        // code
    }
}
