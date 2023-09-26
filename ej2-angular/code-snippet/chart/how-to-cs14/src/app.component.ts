

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart style='display:block;' [chartArea]='chartArea' align='center' [title]='title' [primaryXAxis]='primaryXAxis'
        [primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Area' xName='x' yName='y' [marker]='marker' name='Product A' opacity=0.5 width=2
            border-color='transparent'>
            </e-series>
            <e-series [dataSource]='data1' type='Area' xName='x' yName='y' [marker]='marker' name='Product B' opacity=0.5
            width=2 border-color='transparent'>
            </e-series>
            <e-series [dataSource]='data2' type='RangeArea' xName='x' high='high' low='low' [marker]='marker' name='Product C'
            opacity=1 width=2 border-color='transparent'>
            </e-series>
        </e-series-collection>
        </ejs-chart>`
})
export class AppComponent implements OnInit {
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
        { x: new Date(2003, 6, 1), high: 3.3, low: 3.3 },
        { x: new Date(2004, 0, 1), high: 3.6, low: 3.2 },
        { x: new Date(2004, 4, 1), high: 3.4, low: 3.4 }
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
    }ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
;
}


