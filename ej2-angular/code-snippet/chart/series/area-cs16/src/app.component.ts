import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, TooltipService, CategoryService, LegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { energyConsumptionData } from './datasource';

@Component({
    imports: [ChartModule, ChartAllModule],
    providers: [AreaSeriesService, CategoryService, LegendService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='year' yName='oil' name='Oil' [emptyPointSettings]='oilEmptyPointSettings' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='Area' xName='year' yName='coal' name='Coal' [emptyPointSettings]='coalEmptyPointSettings' [marker]='marker'></e-series>
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
    public oilEmptyPointSettings?: Object;
    public coalEmptyPointSettings?: Object;
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
        this.oilEmptyPointSettings = {
            mode: 'Average',
            fill: 'red'
        };
        this.coalEmptyPointSettings = {
            mode: 'Gap'
        };
        this.marker= { visible: true, width: 5, height: 5, isFilled: true };
    }
}
