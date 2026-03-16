import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, AreaSeriesService, LegendService, ZoomService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { series1 } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [DateTimeService, AreaSeriesService, LegendService, ZoomService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [chartArea]='chartArea' [title]='title' [zoomSettings]='zoomSettings' [legendSettings]='legendSettings'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' name='Product X' [border]='border' [animation]='animation'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public chartArea?: Object;
    public title?: string;
    public border?: Object;
    public animation?: Object;
    public zoomSettings?: Object;
    public legendSettings?: Object;
    ngOnInit(): void {
        this.chartData = series1;
        this.primaryXAxis = {
            title: 'Years',
            valueType: 'DateTime',
            labelFormat: 'yMMM',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
            title: 'Profit ($)',
            rangePadding: 'None',
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        };
        this.zoomSettings = {
            enableSelectionZooming: true,
            toolbarItems: ['Zoom', 'Pan', 'Reset'],
            showToolbar: true,
            toolbarPosition: {
                y: -10,
                draggable: true,
                horizontalAlignment: "Far",
                verticalAlignment: "Top"
            }
        };
        this.title = 'Sales History of Product X';
        this.legendSettings = { visible: false };
        this.chartArea = { border: { width: 0 } };
        this.border = { width: 0.5, color: '#00bdae' };
        this.animation = { enable: false };
    }

}
