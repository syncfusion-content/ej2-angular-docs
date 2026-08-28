import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService } from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';
import { lineData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [CategoryService, LineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='month' yName='sales' fill='red'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;

    ngOnInit(): void {
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.chartData = lineData;
        this.primaryYAxis = {
            title: 'Sales'
        };
        this.title = 'Monthly Sales Comparison';
    }
}
