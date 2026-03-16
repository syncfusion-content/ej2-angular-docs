import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { PieSeriesService, AccumulationDataLabelService, AccumulationLegendService, AccumulationTooltipService } from '@syncfusion/ej2-angular-charts';



import { Component, OnInit } from '@angular/core';
import { CategoryData } from './datasource';

@Component({
    imports: [AccumulationChartModule],
    providers: [PieSeriesService, AccumulationDataLabelService, AccumulationLegendService, AccumulationTooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [title]="title" [legendSettings]="legendSettings" [tooltip]="tooltip" [enableSmartLabels]="enableSmartLabels">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]="categoryData" type="Pie" xName="Category" yName="Share" name="Share by Category" [dataLabel]="dataLabel" [border]="border" [linearGradient]="linearGradient"></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public categoryData?: Object[];
    public dataLabel?: Object;
    public border?: Object;
    public linearGradient?: Object;
    public legendSettings?: Object;
    public tooltip?: Object;
    public title?: string;
    public enableSmartLabels?: boolean;
    ngOnInit(): void {
        this.categoryData = CategoryData;
        this.dataLabel = { visible: true, name: 'DataLabelMappingName', position: 'Outside', connectorStyle: { length: '10px' }, font: { size: '12px' } };
        this.border = { color: '#FFFFFF', width: 2 };
        this.linearGradient = {
            x1: 0.1, y1: 0,
            x2: 0.9, y2: 1,
            gradientColorStop: [
                { color: '#4F46E5', offset: 0, opacity: 1, brighten: 0.55 },
                { color: '#4F46E5', offset: 60, opacity: 0.98, brighten: 0.15 },
                { color: '#4F46E5', offset: 100, opacity: 0.95, brighten: -0.25 }
            ]
        };
        this.legendSettings = { visible: true, position: 'Right' };
        this.tooltip = { enable: true };
        this.title = 'Orders by Category';
        this.enableSmartLabels = true;
    }
}