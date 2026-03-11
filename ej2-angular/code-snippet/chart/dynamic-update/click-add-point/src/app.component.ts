import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ChartComponent, LineSeriesService, CategoryService, TooltipService, DataLabelService, IAxisRangeCalculatedEventArgs, Series, IMouseEventArgs } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
imports: [
         ChartModule
    ],

providers: [ LineSeriesService, CategoryService, TooltipService, DataLabelService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart #chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [chartArea]='chartArea' [tooltip]='tooltip' (chartMouseClick)='chartMouseClick($event)' (axisRangeCalculated)="axisRangeCalculated($event)">
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' width=3 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>
   `
})
export class AppComponent implements OnInit {
    @ViewChild('chart')
    public chart?: ChartComponent;
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[] = [
        { x: 20, y: 20 },
        { x: 80, y: 80 }
    ];
    public title?: string;
    public marker?: Object;
    public chartArea?: Object;
    public tooltip?: Object;
    ngOnInit(): void {
        this.primaryXAxis = {
            edgeLabelPlacement: 'Shift',
            rangePadding: 'Additional',
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
            title: 'Value',
            interval: 20,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 }
        };
        this.title = 'User supplied data';
        this.marker = {
            visible: true,
            isFilled: true,
            border: {
                width: 2,
                color: 'White'
            },
            width: 13,
            height: 13
        };
        this.chartArea = {
            border: { width: 0 }
        };
        this.tooltip = { enable: true };
    }
    public chartMouseClick(args: IMouseEventArgs): void {
        let isRemoved: boolean = false;
        if (args.axisData && this.chart?.series) {
            for (let i: number = 0; i < (this.chart.series[0] as Series).points.length; i++) {
                let markerWidth: number = (this.chart.series[0] as Series).marker?.width ?? 0 / 2;
                let roundedX: number = Math.round(args.axisData['primaryXAxis']) + markerWidth;
                let roundedY: number = Math.round(args.axisData['primaryYAxis']) + markerWidth;
                let pointX: number = Math.round((this.chart.series[0] as Series).points[i].x as number) + markerWidth;
                let pointY: number = Math.round((this.chart.series[0] as Series).points[i].y as number) + markerWidth;
                if ((roundedX === pointX || roundedX + 1 === pointX || roundedX - 1 === pointX) &&
                    (roundedY === pointY || roundedY + 1 === pointY || roundedY - 1 === pointY)) {
                    if ((this.chart.series[0] as Series).points.length > 1) {
                        const points = (this.chart.series[0] as Series).points;
                        const duration: number = i === 0 || i === points[points.length - 1].index ? 500 : 0;
                        if (this.chart?.series?.length) {
                            if (typeof this.chart.series[0].removePoint === 'function') {
                                this.chart.series[0].removePoint(i, duration);
                            }
                        }
                    }
                    isRemoved = true;
                }
            }
            if (!isRemoved) {
                if (this.chart?.series?.length) {
                    if (typeof this.chart.series[0].addPoint === 'function') {
                        this.chart.series[0].addPoint({
                            x: Math.round(args.axisData['primaryXAxis']),
                            y: Math.round(args.axisData['primaryYAxis'])
                        });
                    }
                }
            }
        }
    };
    public axisRangeCalculated(args: IAxisRangeCalculatedEventArgs): void {
        if (args.axis.name === 'primaryXAxis') {
            if (args.interval < 10) {
                args.maximum = args.maximum + 10;
                args.minimum = args.minimum - 10;
                args.interval = 10;
            }
        }
        if (args.axis.name === 'primaryYAxis') {
            if (args.maximum <= 60) {
                args.interval = 10;
            }
        }
    };
}
