import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, SplineSeriesService } from '@syncfusion/ej2-angular-charts';
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts';

import { Component, OnInit } from '@angular/core';
import { splineData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [CategoryService, SplineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Spline' xName='x' yName='y' name='London' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;

    ngOnInit(): void {
        this.chartData = splineData;
        this.marker = { visible: true };
        this.primaryXAxis = {
            title: 'Month',
            valueType: 'Category'
        };
        this.title = 'Climate Graph-2012';
    }

    public pointRender(args: IPointRenderEventArgs): void {
        args.fill = '#ff6347';
    }
}
