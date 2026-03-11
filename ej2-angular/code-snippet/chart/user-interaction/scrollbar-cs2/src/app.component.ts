import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, AreaSeriesService } from '@syncfusion/ej2-angular-charts'
import { LegendService, ZoomService, ScrollBarService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { series1 } from './datasource';

@Component({
imports: [
         ChartModule
    ],

providers: [ DateTimeService, AreaSeriesService, LegendService, ZoomService, ScrollBarService],
standalone: true,
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
                scrollbarColor: 'red',
                position:'Bottom',
            }
        };
        this.primaryYAxis = {
            scrollbarSettings: {
                enable: true,
                enableZoom: false,
                height: 14,
                trackRadius: 8,
                scrollbarRadius: 8,
                gripColor: 'transparent',
                trackColor: 'yellow',
                scrollbarColor: 'red',
                position:'Right',
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
