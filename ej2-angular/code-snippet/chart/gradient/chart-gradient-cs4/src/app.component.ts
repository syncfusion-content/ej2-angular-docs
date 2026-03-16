import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, ColumnSeriesService, DataLabelService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';



import { Component, OnInit } from '@angular/core';
import { SalesData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService, DataLabelService, LegendService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis" [title]="title" [tooltip]="tooltip" [legendSettings]="legendSettings">
        <e-series-collection>
            <e-series [dataSource]="salesData" type="Column" xName="Month" yName="Amount" name="Sales" [marker]="marker" [radialGradient]="radialGradient"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public salesData?: Object[];
    public marker?: Object;
    public radialGradient?: Object;
    public tooltip?: Object;
    public legendSettings?: Object;
    public title?: string;
    ngOnInit(): void {
        this.salesData = SalesData;
        this.primaryXAxis = { valueType: 'Category' };
        this.primaryYAxis = { labelFormat: '${value}k' };
        this.marker = { visible: true, isFilled: true, dataLabel: { visible: true } };
        this.radialGradient = {
            cx: 0.5, cy: 0.5,
            fx: 0.5, fy: 0.5, r: 0.5,
            gradientColorStop: [
                { color: '#FFFF00', offset: 0, opacity: 1, lighten: 0, brighten: 0 },
                { color: '#7C3AED', offset: 100, opacity: 0.95, lighten: 0, brighten: 0.9 }
            ]
        };
        this.tooltip = { enable: true };
        this.legendSettings = { visible: true };
        this.title = 'Monthly Sales Performance';
    }
}