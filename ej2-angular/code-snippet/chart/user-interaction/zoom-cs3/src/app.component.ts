


import { Component, OnInit } from '@angular/core';
import { series1 } from './chartdata';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [zoomSettings]='zoom' [legendSettings]='legend'>
        <e-series-collection>
            <e-series [dataSource]='series1' type='Area' xName='x' yName='y' name='Product X' [border]='border' [animation]='animation'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public series1?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public border?: Object;
    public zoom?: Object;
    public animation?: Object;
    public legend?: Object;
    chartData: { x: Date; y: number; }[] | undefined;
    ngOnInit(): void {
        this.chartData = [
              { x: new Date(2016, 0, 1), y: -7.1 }, { x: new Date(2016, 1, 1), y: -3.7 },
              { x: new Date(2016, 2, 1), y: 0.8 }, { x: new Date(2016, 3, 1), y: 6.3 },
              { x: new Date(2016, 4, 1), y: 13.3 }, { x: new Date(2016, 5, 1), y: 18.0 },
              { x: new Date(2016, 6, 1), y: 19.8 }, { x: new Date(2016, 7, 1), y: 18.1 },
              { x: new Date(2016, 8, 1), y: 13.1 }, { x: new Date(2016, 9, 1), y: 4.1 },
              { x: new Date(2016, 10, 1), y: -3.8 }, { x: new Date(2016, 11, 1), y: -6.8 }
        ];
        this.primaryXAxis = {
            title: 'Years',
            valueType: 'DateTime',
            labelFormat: 'yMMM',
            edgeLabelPlacement: 'Shift',
            majorGridLines : { width : 0 }
        };
        this.primaryYAxis = {
            title: 'Profit ($)',
            rangePadding: 'None',
            lineStyle : { width: 0 },
            majorTickLines : {width : 0}
        };
        this.zoom = {
             enableSelectionZooming: true,
             mode: 'X'
        };
        this.animation = { enable: false};
        this.series1 = series1;
        this.legend = { visible: false };
        this.border = { width: 0.5, color: '#00bdae' };
        this.title = 'Sales History of Product X';
    }

}



