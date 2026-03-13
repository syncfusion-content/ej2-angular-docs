import { Component, OnInit } from '@angular/core';
import { ChartAllModule, ICrosshairLabelRenderEventArgs } from '@syncfusion/ej2-angular-charts';
import { LineSeriesService, CrosshairService, CategoryService } from '@syncfusion/ej2-angular-charts';

import { data } from './datasource';

@Component({
    imports: [
        ChartAllModule
    ],
    providers: [LineSeriesService, CrosshairService, CategoryService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="charts" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" 
        [crosshair]="crosshair" (crosshairLabelRender)="crosshairLabelRender($event)">
        <e-series-collection>
            <e-series [dataSource]="chartData" type="Line" xName="x" yName="y" name="Series"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public crosshair?: Object;
    public chartData?: Object[];

    ngOnInit(): void {
        this.chartData = data;

        this.primaryXAxis = {
            valueType: 'Category',
            crosshairTooltip: { enable: true }
        };

        this.primaryYAxis = {
            crosshairTooltip: { enable: true }
        };

        this.crosshair = { enable: true };
    }

    crosshairLabelRender(args: ICrosshairLabelRenderEventArgs): void {
        if (args.axisName === 'primaryYAxis' && typeof args.value === 'number') {
            if (args.value > 1000) {
                args.text = (args.value / 1000).toFixed(1) + 'K';
                args.textStyle = args.textStyle || {};
                args.textStyle.color = '#d32f2f';
                args.fill = '#ffebee';
            }
            if (args.value < 0) {
                args.cancel = true;
            }
        }

        if (args.axisOrientation === 'Horizontal' && typeof args.text === 'string') {
            if (args.text.length > 8) {
                args.text = args.text.substring(0, 8) + '...';
                
            }
        }
    }
}