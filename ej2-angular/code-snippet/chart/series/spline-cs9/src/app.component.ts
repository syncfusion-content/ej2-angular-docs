import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, SplineSeriesService } from '@syncfusion/ej2-angular-charts';
import { ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';

import { Component, OnInit } from '@angular/core';
import { splineData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [CategoryService, SplineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (seriesRender)='seriesRender($event)' [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Spline' xName='x' yName='y' name='London'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;

    ngOnInit(): void {
        this.chartData = splineData;
        this.primaryXAxis = {
            title: 'Month',
            valueType: 'Category'
        };
        this.title = 'Climate Graph-2012';
    }

    public seriesRender(args: ISeriesRenderEventArgs): void {
        args.fill = '#ff6347';
    }
}
