import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, TooltipService, CategoryService, LegendService } from '@syncfusion/ej2-angular-charts';
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { Component, OnInit } from '@angular/core';
import { energyConsumptionData } from './datasource';

@Component({
    imports: [ChartModule, ChartAllModule],
    providers: [AreaSeriesService, CategoryService, LegendService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings' [tooltip]='tooltip' (pointRender)='pointRender($event)'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='year' yName='oil' name='Oil' [marker]='marker' opacity='0.5'></e-series>
            <e-series [dataSource]='chartData' type='Area' xName='year' yName='coal' name='Coal' [marker]='marker' opacity='0.5'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public legendSettings?: Object;
    public tooltip?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = energyConsumptionData;
        this.primaryXAxis = {
            minimum: 2000, maximum: 2024,
            interval: 4, edgeLabelPlacement: 'Shift'
        };
        this.primaryYAxis = {
            title: 'Energy (TWh)',
            labelFormat: '{value} TWh'
        };
        this.title = 'Global primary energy consumption by source';
        this.legendSettings = { visible: true, enableHighlight: true };
        this.tooltip = { enable: true };
        this.marker = { visible: true, width: 8, height: 8 };
    }
    public pointRender(args: IPointRenderEventArgs): void {
        if (args.point.index % 2 !== 0) {
            args.fill = '#2E8B57';
        } else {
            args.fill = '#4B0082';
        }
    };
}
