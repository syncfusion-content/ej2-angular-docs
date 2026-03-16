import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LineSeriesService, TooltipService, CrosshairService, LegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [DateTimeService, LineSeriesService, TooltipService, CrosshairService, LegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' [crosshair]='crosshair' [tooltip]='tooltip' [legendSettings]='legendSettings'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='John' width='2' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public crosshair?: Object;
    public title?: string;
    public tooltip?: Object;
    public marker?: Object;
    public legendSettings?: Object;
    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = {
            title: 'Years',
            minimum: new Date(2000, 1, 1), maximum: new Date(2006, 2, 11),
            intervalType: 'Years',
            valueType: 'DateTime',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift'
        };
        this.primaryYAxis = {
            title: 'Revenue in Millions',
            labelFormat: '{value}M',
            majorTickLines: { width: 0 },
            minimum: 10, maximum: 60,
            lineStyle: { width: 0 }
        };
        this.crosshair = { enable: true, lineType: 'Horizontal', snapToData: true };
        this.tooltip = { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' };
        this.title = 'Average Sales per Person';
        this.marker = { visible: true };
        this.legendSettings = { visible: false };
    }

}
