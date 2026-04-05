import { Component, OnInit } from '@angular/core';
import { ChartAllModule } from '@syncfusion/ej2-angular-charts';
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
                [marker]="marker" [labelSettings]="vietnamLabelSettings"></e-series>
            <e-series [dataSource]="indonesiaData" type="Line" xName="x" yName="y" name="Indonesia"
                [marker]="marker" [labelSettings]="indonesiaLabelSettings"></e-series>
            <e-series [dataSource]="franceData" type="Line" xName="x" yName="y" name="France"
                [marker]="marker" [labelSettings]="franceLabelSettings"></e-series>
            <e-series [dataSource]="polandData" type="Line" xName="x" yName="y" name="Poland"
                [marker]="marker" [labelSettings]="polandLabelSettings"></e-series>
            <e-series [dataSource]="mexicoData" type="Line" xName="x" yName="y" name="Mexico"
                [marker]="marker" [labelSettings]="mexicoLabelSettings"></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public legendSettings?: Object;
    public marker?: Object;

    public vietnamLabelSettings?: Object;
    public indonesiaLabelSettings?: Object;
    public franceLabelSettings?: Object;
    public polandLabelSettings?: Object;
    public mexicoLabelSettings?: Object;

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

        this.vietnamLabelSettings = {
            visible: true,
            text: 'Vietnam',
            background: '#E8F5E9',
            border: { width: 2, color: '#2E7D32' },
            opacity: 0.9,
            font: { size: '12px', fontWeight: '600', color: '#2E7D32' },
            showOverlapText: true
        };

        this.indonesiaLabelSettings = {
            visible: true,
            text: 'Indonesia',
            background: '#FFF3E0',
            border: { width: 2, color: '#FB8C00' },
            opacity: 0.9,
            font: { size: '12px', fontWeight: '600', color: '#FB8C00' },
            showOverlapText: true
        };

        this.franceLabelSettings = {
            visible: true,
            text: 'France',
            background: '#E3F2FD',
            border: { width: 2, color: '#1976D2' },
            opacity: 0.9,
            font: { size: '12px', fontWeight: '600', color: '#1976D2' },
            showOverlapText: true
        };

        this.polandLabelSettings = {
            visible: true,
            text: 'Poland',
            background: '#F3E5F5',
            border: { width: 2, color: '#8E24AA' },
            opacity: 0.9,
            font: { size: '12px', fontWeight: '600', color: '#8E24AA' },
            showOverlapText: true
        };

        this.mexicoLabelSettings = {
            visible: true,
            text: 'Mexico',
            background: '#FBE9E7',
            border: { width: 2, color: '#D84315' },
            opacity: 0.9,
            font: { size: '12px', fontWeight: '600', color: '#D84315' },
            showOverlapText: true
        };
    }
}