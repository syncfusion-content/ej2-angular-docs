import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, SplineSeriesService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { radarData } from './datasource';
@Component({
imports: [
         ChartModule, ButtonModule, ChartAllModule
    ],

providers: [ AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, SplineSeriesService],
standalone: true,
    selector: 'app-container',
    template: ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Radar' xName='x' yName='y' [marker]='marker' drawType='Line' [emptyPointSettings]='emptyPointSettings'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    public emptyPointSettings?: Object;
    public marker?: object;
    ngOnInit(): void {
        this.data = radarData;
        this.primaryXAxis = {
            title: 'Year', startAngle: 90,
            minimum: 2004, maximum: 2012, interval: 1
            };
        this.marker = {visible: true};
        this.title = 'Efficiency of oil-fired power production';
        this.emptyPointSettings = {
            mode: 'Average', fill: 'red'
        }
    }
}
