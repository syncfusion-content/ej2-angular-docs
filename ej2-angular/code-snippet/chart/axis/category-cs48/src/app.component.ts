

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings' [enableAnimation]='enableAnimation'>
        <e-series-collection>
            <e-series [dataSource]='chartData1' type='Column' xName='x' yName='y' name='Gold' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData2' type='Column' xName='x' yName='y' name='Silver' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData3' type='Column' xName='x' yName='y' name='Bronze' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData1?: Object[];
    public chartData2?: Object[];
    public chartData3?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public legendSettings?: Object;
    public marker?: Object;
    public enableAnimation: boolean = true;
    ngOnInit(): void {
        this.chartData1 =  [{ x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }];
        this.chartData2 =  [{ x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }];
        this.chartData3 =  [{ x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }];
        this.primaryXAxis = {
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }
        };
        this.legendSettings = { visible: true };
         this.marker = { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } };
        this.title = 'Olympic Medal Counts - RIO';
    }

}


