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
            <e-accumulation-series [dataSource]="categoryData" type="Pie" innerRadius="50%" xName="Category" yName="Share" name="Share by Category" [dataLabel]="dataLabel" [border]="border" [radialGradient]="radialGradient"></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public categoryData?: Object[];
    public dataLabel?: Object;
    public border?: Object;
    public radialGradient?: Object;
    public legendSettings?: Object;
    public tooltip?: Object;
    public title?: string;
    public enableSmartLabels?: boolean;
    ngOnInit(): void {
        this.categoryData = CategoryData;
        this.dataLabel = { visible: true, name: 'DataLabelMappingName', position: 'Outside', connectorStyle: { length: '10px' }, font: { size: '12px' } };
        this.border = { color: '#FFFFFF', width: 2 };
        this.radialGradient = {
            cx: 0.22, cy: 0.22,
            fx: 0.12, fy: 0.12, r: 0.96,
            gradientColorStop: [
                { color: '#10B981', offset: 0, opacity: 1, brighten: 0.8 },
                { color: '#10B981', offset: 30, opacity: 1, brighten: 0.3 },
                { color: '#10B981', offset: 60, opacity: 1, brighten: 0 },
                { color: '#10B981', offset: 85, opacity: 1, brighten: -0.3 },
                { color: '#10B981', offset: 100, opacity: 1, brighten: -0.6 }
            ]
        };
        this.legendSettings = { visible: true, position: 'Right' };
        this.tooltip = { enable: true };
        this.title = 'Orders by Category';
        this.enableSmartLabels = true;
    }
}