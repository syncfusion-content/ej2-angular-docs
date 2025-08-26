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
            <e-series [dataSource]='chartData' type='Area' xName='year' yName='oil' name='Oil' [border]='oilBorder'></e-series>
            <e-series [dataSource]='chartData' type='Area' xName='year' yName='coal' name='Coal' [border]='coalBorder'></e-series>
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
    public oilBorder?: Object;
    public coalBorder?: Object;
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
        this.oilBorder = { width: 2, color: '#962D18', dashArray: '2,5' };
        this.coalBorder = { width: 2, color: '#962D18', dashArray: '2,5' };
    }
}
