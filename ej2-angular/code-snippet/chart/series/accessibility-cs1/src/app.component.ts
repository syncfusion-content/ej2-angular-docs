import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService, LegendService, TooltipService, DataLabelService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, LineSeriesService, LegendService, TooltipService, DataLabelService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'
    [tooltip]='tooltip' [legendSettings]='legendSettings' [accessibility]='accessibility' focusBorderColor='#FF0000'
    focusBorderWidth=3 focusBorderMargin=5>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='month' yName='sales' name='Sales' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public tooltip?: Object;
    public legendSettings?: Object;
    public accessibility?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.primaryYAxis = {
            labelFormat: '${value}K'
        };
        this.title = 'Sales Analysis';
        this.tooltip = { enable: true };
        this.legendSettings = { visible: true };
        this.accessibility = {
            accessibilityDescription: 'A line chart displaying the sales analysis for each month.',
            accessibilityRole: 'chart'
        };
        this.marker = { visible: true, dataLabel: { visible: true } };
    }

}
