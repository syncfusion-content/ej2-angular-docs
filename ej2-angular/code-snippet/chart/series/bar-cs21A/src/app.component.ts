import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { BarSeriesService, TooltipService, CategoryService, LegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { appleSalesData, xiaomiSalesData, oppoSalesData } from './datasource';

@Component({
    imports: [ChartModule, ChartAllModule],
    providers: [BarSeriesService, CategoryService, LegendService, TooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings' [tooltip]='tooltip' [chartArea]='chartArea'>
        <e-series-collection>
            <e-series [dataSource]='appleChartData' type='Bar' xName='year' yName='count' name='Apple' columnSpacing=0.3 legendShape='Rectangle' [cornerRadius]='cornerRadius'></e-series>
            <e-series [dataSource]='xiaomiChartData' type='Bar' xName='year' yName='count' name='Xiaomi' columnSpacing=0.3 legendShape='Rectangle' [cornerRadius]='cornerRadius'></e-series>
            <e-series [dataSource]='oppoChartData' type='Bar' xName='year' yName='count' name='Oppo' columnSpacing=0.3 legendShape='Rectangle' [cornerRadius]='cornerRadius'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public appleChartData?: Object[];
    public xiaomiChartData?: Object[];
    public oppoChartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public legendSettings?: Object;
    public tooltip?: Object;
    public cornerRadius?: Object;
    public chartArea?: Object;
    ngOnInit(): void {
        this.appleChartData = appleSalesData;
        this.xiaomiChartData = xiaomiSalesData;
        this.oppoChartData = oppoSalesData;
        this.primaryXAxis = {
            valueType: 'Category',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 }
        };
        this.primaryYAxis = {
            labelFormat: '{value}M',
            title: 'Units Sold (in Millions)',
            maximum: 300,
            edgeLabelPlacement: 'Shift',
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 },
            lineStyle: { width: 0 }
        };
        this.title = 'Global Smartphone Sales Trends by Brand (2022-2024)';
        this.legendSettings = {
            visible: true,
            enableHighlight: true,
            shapeWidth: 9,
            shapeHeight: 9
        };
        this.tooltip = {
            enable: true,
            enableHighlight: true,
            header: '<b>${series.name}</b>',
            format: '${point.x} : <b>${point.y}</b>'
        };
        this.cornerRadius = {
            topRight: 4,
            bottomRight: 4
        };
        this.chartArea = {
            border: {
                width: 0
            },
            margin: {
                bottom: 12
            }
        };
    }
}
