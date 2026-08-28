import { ChartModule, CategoryService, ParetoSeriesService, LineSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';

import { Component, OnInit } from '@angular/core';
import { paretoData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ParetoSeriesService, LineSeriesService, ColumnSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (seriesRender)='seriesRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
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

    ngOnInit(): void {
        this.chartData = paretoData;
        this.primaryXAxis = {
            title: 'Defects',
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Frequency of Occurrence',
            minimum: 0,
            maximum: 30
        };
        this.title = 'Pareto chart - Defects in Shirts';
    }

    public seriesRender(args: ISeriesRenderEventArgs): void {
        args.fill = 'green';
    }
}
