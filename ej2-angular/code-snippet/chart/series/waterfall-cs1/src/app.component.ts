

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart style='display:block;' id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
                [title]='title' >
                <e-series-collection>
                    <e-series [dataSource]='data' type='Waterfall' xName='x' yName='y' name='USA' [columnWidth]='columnWidth'
                [connector]='connector' [intermediateSumIndexes]='intermediate' [sumIndexes]='sum' [marker]='marker'> </e-series>
                </e-series-collection>
     </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    public marker?: Object;
    public connector?: Object;
    public sum: number[] = [8];
    public intermediate: number[] = [4, 7];
    public columnWidth: number = 0.6;

    ngOnInit(): void {
        this.data = [
            { x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 },
            { x: 'Development', y: -688 },
            { x: 'Revenue', y: 1030 }, {x: 'Balance'},
            { x: 'Administrative', y: -780 },
            { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
            { x: 'Net Profit'}
            ];
        this.primaryXAxis = {
            majorGridLines: {width: 0},
            valueType: 'Category',
            };
        this.primaryYAxis = {
            labelFormat: '${value}M',
            minimum: 0, maximum: 5500, interval: 500,
            majorGridLines: {width: 0},
            lineStyle: { width: 0},
            majorTickLines: { width: 0}
            };
        this.marker = {
            dataLabel: { visible: true, position: 'Outer' }
            };
        this.connector = { color: '#5F6A6A', width: 1.5 };
        this.title = 'Company Revenue and Profit';
    }
}


