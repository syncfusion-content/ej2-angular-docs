import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, LineSeriesService, SplineSeriesService } from '@syncfusion/ej2-angular-charts'
import { SelectionService, ZoomService } from '@syncfusion/ej2-angular-charts'
import { Component, ViewChild, OnInit } from '@angular/core';
import { IMouseEventArgs, ChartComponent, IZoomCompleteEventArgs, ISelectionCompleteEventArgs } from '@syncfusion/ej2-angular-charts';
import { synchronizedData } from './datasource';
import { Browser } from '@syncfusion/ej2-base';
@Component({
imports: [
         ChartModule
    ],

providers: [ DateTimeService, LineSeriesService, SplineSeriesService, SelectionService, ZoomService],
standalone: true,
    selector: 'app-container',
    template: `<div class="control-section">
    <div class="row">
        <div class="col" >
            <ejs-chart #chart1 style='display:block;' id="container1" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis1'
                [title]='title1' [titleStyle]="titleStyle" [zoomSettings]='zoomSettings' (zoomComplete)='zoomComplete($event)' selectionMode='Point' selectionPattern='Box' (selectionComplete)='selectionComplete($event)'>
                <e-series-collection>
                    <e-series [dataSource]='chartData' type='Line' xName='USD' yName='EUR' [width]="width">
                    </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div class="col" >
            <ejs-chart #chart2 style='display:block;' id="container2" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis2'
                [title]='title2' [titleStyle]="titleStyle" [zoomSettings]='zoomSettings' (zoomComplete)='zoomComplete($event)' selectionMode='Point' selectionPattern='Box' (selectionComplete)='selectionComplete($event)'>
                <e-series-collection>
                    <e-series [dataSource]='chartData' type='Spline' xName='USD' yName='INR'
                        [width]="width" [border]='border'>
                    </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
    </div>
</div>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis1?: Object
    public primaryYAxis2?: Object;
    public chartData?: Object[];
    public title1?: string;
    public title2?: string;
    public titleStyle?: Object;
    public border?: Object;
    public width?: number;
    public zoomSettings?: Object;
    @ViewChild('chart1')
    public chart1!: ChartComponent;
    @ViewChild('chart2')
    public chart2!: ChartComponent;
    public charts: ChartComponent[] = [];
    public zoomFactor: number = 0;
    public zoomPosition: number = 0;
    public count: number = 0;
    ngAfterViewInit() {
        this.charts = [this.chart1, this.chart2];
    }
    public zoomComplete(args: IZoomCompleteEventArgs): void {
        if (args.axis.name === 'primaryXAxis') {
            this.zoomFactor = args.currentZoomFactor;
            this.zoomPosition = args.currentZoomPosition;
            this.zoomCompleteFunction(args);
        }
    };
    public zoomCompleteFunction(args: any): void {
        for (let i: number = 0; i < this.charts.length; i++) {
            if (args.axis.series[0].chart.element.id !== this.charts[i].element.id) {
                this.charts[i].primaryXAxis.zoomFactor = this.zoomFactor;
                this.charts[i].primaryXAxis.zoomPosition = this.zoomPosition;
                this.charts[i].zoomModule.isZoomed = args.axis.series[0].chart.zoomModule.isZoomed;
                this.charts[i].zoomModule.isPanning = args.axis.series[0].chart.zoomModule.isPanning;
            }
        }
    };
    public selectionComplete(args: ISelectionCompleteEventArgs): void {
        this.selectionCompleteFunction(args);
    }
    public selectionCompleteFunction(args: any): void {
        if (this.count == 0) {
            for (var j = 0; j < args.selectedDataValues.length; j++) {
                args.selectedDataValues[j].point = args.selectedDataValues[j].pointIndex;
                args.selectedDataValues[j].series = args.selectedDataValues[j].seriesIndex;
            }
            for (var i = 0; i < this.charts.length; i++) {
                if (args.chart.element.id !== this.charts[i].element.id) {
                    this.charts[i].selectedDataIndexes = args.selectedDataValues;
                    this.count += 1;
                    this.charts[i].dataBind();
                }
            }
            this.count = 0;
        }
    }

    ngOnInit(): void {
        this.chartData = synchronizedData;
        this.primaryXAxis = {
            minimum: new Date(2023, 1, 18),
            maximum: new Date(2023, 7, 18),
            valueType: 'DateTime',
            labelFormat: 'MMM d',
            lineStyle: { width: 0 },
            majorGridLines: { width: 0 },
            edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
            labelRotation: Browser.isDevice ? -45 : 0,
            interval: Browser.isDevice ? 2 : 1
        };
        this.primaryYAxis1 = {
            labelFormat: 'n2',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            minimum: 0.86,
            maximum: 0.96,
            interval: 0.025
        };
        this.primaryYAxis2 = {
            labelFormat: 'n1',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            minimum: 79,
            maximum: 85,
            interval: 1.5
        };
        this.title1 = 'US to Euro';
        this.title2 = 'US to INR';
        this.zoomSettings = {
            enableSelectionZooming: true,
            mode: 'X'
        };
        this.border = {
            width: 2
        };
        this.width = 2;
        this.titleStyle = {
            textAlignment: 'Near'
        };
    }
}
