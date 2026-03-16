import { Component, OnInit } from '@angular/core';
import { ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { ColumnSeriesService, CategoryService, TooltipService, LegendService } from '@syncfusion/ej2-angular-charts';

import { vietnamData, franceData, mexicoData } from './datasource';

@Component({
    imports: [
        ChartAllModule
    ],
    providers: [ColumnSeriesService, CategoryService, TooltipService, LegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="charts" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis"
        [legendSettings]="legendSettings" [tooltip]="tooltip">
        <e-series-collection>
            <e-series [dataSource]="vietnamData" type="Column" xName="x" yName="y" name="Vietnam" [marker]="marker"></e-series>
            <e-series [dataSource]="franceData" type="Column" xName="x" yName="y" name="France" [marker]="marker"></e-series>
            <e-series [dataSource]="mexicoData" type="Column" xName="x" yName="y" name="Mexico" [marker]="marker"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public legendSettings?: Object;
    public tooltip?: Object;
    public marker?: Object;

    public vietnamData?: Object[];
    public franceData?: Object[];
    public mexicoData?: Object[];

    ngOnInit(): void {
        this.vietnamData = vietnamData;
        this.franceData = franceData;
        this.mexicoData = mexicoData;

        this.primaryXAxis = {
            valueType: 'Category'
        };

        this.primaryYAxis = {
            title: 'Value'
        };

        this.legendSettings = {
            visible: true
        };

        this.tooltip = {
            enable: true,
            followPointer: true
        };

        this.marker = {
            visible: true
        };
    }
}