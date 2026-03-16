import { Component, OnInit } from '@angular/core';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { LineSeriesService, CategoryService, TooltipService, LegendService } from '@syncfusion/ej2-angular-charts';

import { vietnamData, indonesiaData, franceData, polandData, mexicoData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [LineSeriesService, CategoryService, TooltipService, LegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="charts" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis"
        [legendSettings]="legendSettings" [tooltip]="tooltip">
        <e-series-collection>
            <e-series [dataSource]="vietnamData" type="Line" xName="x" yName="y" name="Vietnam" [marker]="marker"></e-series>
            <e-series [dataSource]="indonesiaData" type="Line" xName="x" yName="y" name="Indonesia" [marker]="marker"></e-series>
            <e-series [dataSource]="franceData" type="Line" xName="x" yName="y" name="France" [marker]="marker"></e-series>
            <e-series [dataSource]="polandData" type="Line" xName="x" yName="y" name="Poland" [marker]="marker"></e-series>
            <e-series [dataSource]="mexicoData" type="Line" xName="x" yName="y" name="Mexico" [marker]="marker"></e-series>
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
    public indonesiaData?: Object[];
    public franceData?: Object[];
    public polandData?: Object[];
    public mexicoData?: Object[];

    ngOnInit(): void {
        this.vietnamData = vietnamData;
        this.indonesiaData = indonesiaData;
        this.franceData = franceData;
        this.polandData = polandData;
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
            split: true
        };

        this.marker = {
            visible: true
        };
    }
}