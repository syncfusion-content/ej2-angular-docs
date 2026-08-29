import { ChartModule, CategoryService, ParetoSeriesService, LineSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';
import { paretoData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ParetoSeriesService, LineSeriesService, ColumnSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Pareto' xName='x' yName='y' name='Defect'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public tooltip?: Object;

    ngOnInit(): void {
        this.chartData = paretoData;
        this.primaryXAxis = {
            title: 'Defects',
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Frequency of Occurrence',
            minimum: 0,
            maximum: 150,
            interval: 30
        };
        this.tooltip = { enable: true, shared: true };
        this.title = 'Pareto chart - Defects in Shirts';
    }

}
