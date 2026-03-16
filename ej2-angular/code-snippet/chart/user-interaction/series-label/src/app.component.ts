import { Component, OnInit } from '@angular/core';
import { ChartAllModule} from '@syncfusion/ej2-angular-charts';
import { LineSeriesService, CategoryService, DataLabelService, LegendService } from '@syncfusion/ej2-angular-charts';

import { vietnamData, indonesiaData, franceData, polandData, mexicoData } from './datasource';

@Component({
    imports: [
        ChartAllModule
    ],
    providers: [LineSeriesService, CategoryService, DataLabelService, LegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="charts" [primaryXAxis]="primaryXAxis" [legendSettings]="legendSettings">
        <e-series-collection>
            <e-series [dataSource]="vietnamData" type="Line" xName="x" yName="y" name="Vietnam"
                [marker]="marker" [labelSettings]="labelSettings">
                </e-series>
            <e-series [dataSource]="indonesiaData" type="Line" xName="x" yName="y" name="Indonesia"
                [marker]="marker" [labelSettings]="labelSettings">
                </e-series>
            <e-series [dataSource]="franceData" type="Line" xName="x" yName="y" name="France"
                [marker]="marker" [labelSettings]="labelSettings">
                </e-series>
            <e-series [dataSource]="polandData" type="Line" xName="x" yName="y" name="Poland"
                [marker]="marker" [labelSettings]="labelSettings">
                </e-series>
            <e-series [dataSource]="mexicoData" type="Line" xName="x" yName="y" name="Mexico"
                [marker]="marker" [labelSettings]="labelSettings">
                </e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public legendSettings?: Object;
    public marker?: Object;
    public labelSettings?: Object;

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

        this.legendSettings = {
            visible: true
        };

        this.marker = {
            visible: true
        };

        this.labelSettings= {
            visible: true
        };
    }
}