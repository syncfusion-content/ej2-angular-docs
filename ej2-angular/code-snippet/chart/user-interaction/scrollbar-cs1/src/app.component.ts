


import { Component, OnInit } from '@angular/core';
import { series1 } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [zoomSettings]='zoom' [legendSettings]='legend'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' name='Product X' [border]='border' [animation]='animation' opacity=0.3></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public primaryYAxis?: Object;
    public zoom?: Object;
    public animation?: Object;
    public legend?: Object;
    title: any;
    border: any;
    ngOnInit(): void {
        this.chartData = series1;
        this.primaryXAxis = {
            valueType: 'DateTime',
            labelFormat: 'yMMM',
            zoomFactor: 0.2, zoomPosition: 0.6,
            scrollbarSettings: {
                enable: true,
                enableZoom: false,
                height: 14,
                trackRadius: 8,
                scrollbarRadius: 8,
                gripColor: 'transparent',
                trackColor: 'yellow',
                scrollbarColor: 'red'
            }
        };
        this.zoom = {
            enableSelectionZooming: true,
            enableScrollbar: true
        };
        this.animation = { enable: false };
        this.legend = { visible: false };

    }

}


