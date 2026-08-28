import { IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { ChartModule, CategoryService, ParetoSeriesService, LineSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';
import { paretoData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ParetoSeriesService, LineSeriesService, ColumnSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Pareto' xName='x' yName='y' name='Defect' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;

    ngOnInit(): void {
        this.chartData = paretoData;
        this.primaryXAxis = {
            title: 'Defects',
            valueType: 'Category'
        };
        this.marker = { visible: true, width: 10, height: 10 };
        this.primaryYAxis = {
            title: 'Frequency of Occurrence',
            minimum: 0,
            maximum: 30
        };
        this.title = 'Pareto chart - Defects in Shirts';
    }

    public pointRender(args: IPointRenderEventArgs): void {
        args.fill = 'green';
    }
}
