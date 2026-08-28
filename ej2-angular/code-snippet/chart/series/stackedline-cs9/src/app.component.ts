import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, StackingLineSeriesService } from '@syncfusion/ej2-angular-charts';
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts';

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [CategoryService, StackingLineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y' name='John' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y1' name='Peter' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y2' name='Steve' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y3' name='Charle' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public marker?: Object;
    public chartData?: Object[];

    ngOnInit(): void {
        this.primaryXAxis = {
            interval: 1,
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Expense',
            interval: 100,
            labelFormat: '${value}'
        };
        this.chartData = chartData;
        this.marker = { visible: true };
    }

    public pointRender(args: IPointRenderEventArgs): void {
        args.fill = '#009cb8';
    }
}
