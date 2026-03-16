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
    template: `<ejs-accumulationchart id="chart-container" [title]="title" [legendSettings]="legendSettings" [tooltip]="tooltip" [enableSmartLabels]="enableSmartLabels" (pointRender)="pointRender($event)">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]="categoryData" type="Pie" xName="Category" yName="Share" name="Share by Category" [dataLabel]="dataLabel" [border]="border"></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public categoryData?: Object[];
    public dataLabel?: Object;
    public border?: Object;
    public legendSettings?: Object;
    public tooltip?: Object;
    public title?: string;
    public enableSmartLabels?: boolean;
    private baseColors: string[] = ["#0072B2", "#E69F00", "#009E73", "#D55E00", "#CC79A7", "#56B4E9", "#F0E442", "#999999", "#7F3C8D"];

    ngOnInit(): void {
        this.categoryData = CategoryData;
        this.dataLabel = { visible: true, name: 'DataLabel', position: 'Outside', connectorStyle: { length: '10px' }, font: { size: '12px' } };
        this.border = { color: '#FFFFFF', width: 2 };
        this.legendSettings = { visible: true, position: 'Right' };
        this.tooltip = { enable: true };
        this.title = 'Orders by Category';
        this.enableSmartLabels = true;
    }
    public pointRender(args: any) {
        const idx: number = args.point.index;
        const base: string = this.baseColors[idx % this.baseColors.length];
        args.linearGradient = {
            x1: 0.05, y1: 0.0, x2: 0.95, y2: 1.0,
            gradientColorStop: [
                { offset: 0, color: base, opacity: 1, brighten: 0.85, lighten: 0 },
                { offset: 20, color: base, opacity: 0.98, brighten: 0.45, lighten: 0 },
                { offset: 50, color: base, opacity: 0.96, brighten: 0, lighten: 0 },
                { offset: 80, color: base, opacity: 0.94, brighten: -0.30, lighten: 0 },
                { offset: 100, color: base, opacity: 0.92, brighten: -0.55, lighten: 0 }
            ]
        };
    }
}