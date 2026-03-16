import { Component, OnInit } from '@angular/core';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ColumnSeriesService, CategoryService, TooltipService, LegendService } from '@syncfusion/ej2-angular-charts';

import { vietnamData, polandData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [ColumnSeriesService, CategoryService, TooltipService, LegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="charts" [primaryXAxis]="primaryXAxis" [primaryYAxis]="primaryYAxis"
        [legendSettings]="legendSettings" [tooltip]="tooltip">
        <e-series-collection>
            <e-series [dataSource]="vietnamData" type="Column" xName="x" yName="y" name="Vietnam" [marker]="marker"></e-series>
            <e-series [dataSource]="polandData" type="Column" xName="x" yName="y" name="Poland" [marker]="marker"></e-series>
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
    public polandData?: Object[];

    ngOnInit(): void {
        this.vietnamData = vietnamData;
        this.polandData = polandData;

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
            distance: 20
        };

        this.marker = {
            visible: true
        };
    }
}