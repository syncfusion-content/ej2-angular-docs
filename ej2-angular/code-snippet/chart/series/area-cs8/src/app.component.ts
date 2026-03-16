import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { MultiColoredAreaSeriesService, TooltipService, CategoryService, LegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { energyConsumptionData } from './datasource';

@Component({
    imports: [ChartModule, ChartAllModule],
    providers: [MultiColoredAreaSeriesService, CategoryService, LegendService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='MultiColoredArea' xName='year' yName='oil' name='Oil' segmentAxis='X' [segments]='segments'></e-series>
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
    public segments?: Object[];
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
        this.legendSettings = { visible: false, enableHighlight: true };
        this.tooltip = { enable: true };
        this.segments = [
            {
                value: 2008,
                color: '#f7a35c'
            },
            {
                value: 2016,
                color: '#7cb5ec'
            },
            {
                color: '#90ed7d'
            }
        ];
    }
}
