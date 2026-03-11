import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, AreaSeriesService, LegendService, ZoomService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { series1 } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [DateTimeService, AreaSeriesService, LegendService, ZoomService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title' [zoomSettings]='zoomSettings' [legendSettings]='legendSettings'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' name='Product X' [border]='border' [animation]='animation'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public border?: Object;
    public animation?: Object;
    public zoomSettings?: Object;
    public legendSettings?: Object;
    ngOnInit(): void {
        this.chartData = series1;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.zoomSettings = {
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true,
            accessibility: {
                accessibilityDescription: 'This allows users to zoom in and out of the chart using mouse wheel, pinch gestures, or selection box.',
                accessibilityRole: 'zoom'
            }
        };
        this.title = 'Sales History of Product X';
        this.legendSettings = { visible: false };
        this.border = { width: 0.5, color: '#00bdae' };
        this.animation = { enable: false };
    }

}
