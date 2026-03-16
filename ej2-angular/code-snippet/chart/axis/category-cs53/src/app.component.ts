import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService, LegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService, LegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='silver' name='Silver'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='bronze' name='Bronze'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Ruby'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='silver' name='Platinum'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='bronze' name='Diamond'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public legendSettings?: Object;
    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Countries'
        };
        this.primaryYAxis = {
            minimum: 0, maximum: 80,
            interval: 20, title: 'Medals'
        };
        this.legendSettings = {
            visible: true,
            layout: "Auto",
            maximumColumns: 3,
            fixedWidth: true
        };
        this.title = 'Olympic Medals';
    }

}
