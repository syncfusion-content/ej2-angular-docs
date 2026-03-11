import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, AreaSeriesService, LineSeriesService } from '@syncfusion/ej2-angular-charts'
import { TooltipService } from '@syncfusion/ej2-angular-charts'
import { Component, ViewChild, OnInit } from '@angular/core';
import { IMouseEventArgs, ChartComponent } from '@syncfusion/ej2-angular-charts';
import { synchronizedData } from './datasource';
import { Browser } from '@syncfusion/ej2-base';
@Component({
imports: [
         ChartModule
    ],

providers: [ DateTimeService, AreaSeriesService, LineSeriesService, TooltipService ],
standalone: true,
    selector: 'app-container',
    template: `<div class="control-section">
    <div class="row">
        <div class="col" >
            <ejs-chart #chart1 style='display:block;' id="container1" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis1'
                [title]='title1' [titleStyle]="titleStyle" [tooltip]="tooltip1"
                (chartMouseLeave)= 'chart1MouseLeave($event)' (chartMouseMove)='chart1MouseMove($event)' (chartMouseUp)='chart1MouseUp($event)'>
                <e-series-collection>
                    <e-series [dataSource]='chartData' type='Line' xName='USD' yName='EUR' [width]="width">
                    </e-series>
                </e-series-collection>
            </ejs-chart>
        </div>
        <div class="col" >
            <ejs-chart #chart2 style='display:block;' id="container2" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis2'
                [title]='title2' [titleStyle]="titleStyle" [tooltip]="tooltip2"
                (chartMouseLeave)= 'chart2MouseLeave($event)' (chartMouseMove)='chart2MouseMove($event)' (chartMouseUp)='chart2MouseUp($event)'>
                <e-series-collection>
                    <e-series [dataSource]='chartData' type='Area' xName='USD' yName='INR' opacity=0.6
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
    public tooltip1?: Object;
    public tooltip2?: Object;
    public border?: Object;
    public width?: number;
    @ViewChild('chart1')
    public chart1: ChartComponent;

    @ViewChild('chart2')
    public chart2: ChartComponent;

    public chart1MouseLeave(args: IMouseEventArgs): void {
        this.chart2.hideTooltip();
    };
    public chart1MouseMove(args: IMouseEventArgs): void {
        if ((!Browser.isDevice && !this.chart1.isTouch && !this.chart1.isChartDrag) || this.chart1.startMove) {
            this.chart2.startMove = this.chart1.startMove;
            this.chart2.showTooltip(args.x, args.y);
        }
    };
    public chart1MouseUp(args: IMouseEventArgs): void {
        if (Browser.isDevice && this.chart1.startMove) {
            this.chart2.hideTooltip();
        }
    };
    public chart2MouseLeave(args: IMouseEventArgs): void {
        this.chart1.hideTooltip();
    };
    public chart2MouseMove(args: IMouseEventArgs): void {
        if ((!Browser.isDevice && !this.chart2.isTouch && !this.chart2.isChartDrag) || this.chart2.startMove) {
            this.chart2.startMove = this.chart1.startMove;
            this.chart1.showTooltip(args.x, args.y);
        }
    };
    public chart2MouseUp(args: IMouseEventArgs): void {
        if (Browser.isDevice && this.chart2.startMove) {
            this.chart1.hideTooltip();
        }
    };
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
        this.tooltip1 = {
            enable: true, fadeOutDuration: Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>€${point.y}</b><br>${point.x} 2023', enableMarker: false
        };
        this.tooltip2 = {
            enable: true, fadeOutDuration: Browser.isDevice ? 2500 : 1000, shared: true, header: '', format: '<b>₹${point.y}</b><br>${point.x} 2023', enableMarker: false
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
