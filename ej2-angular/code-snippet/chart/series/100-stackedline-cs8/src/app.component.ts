import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, StackingLineSeriesService } from '@syncfusion/ej2-angular-charts';
import { ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [CategoryService, StackingLineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (seriesRender)='seriesRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y' name='John' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y1' name='Peter' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y2' name='Steve' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y3' name='Charle' [marker]='marker'></e-series>
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
            title: 'Percentage',
            interval: 25,
            labelFormat: '{value}%'
        };
        this.chartData = chartData;
        this.marker = { visible: true };
    }

    public seriesRender(args: ISeriesRenderEventArgs): void {
        const palette = ['#ff4251', '#4C4C4C', '#794F1B', '#1a9a6f'];
        if (args.series.index >= 0 && args.series.index < palette.length) {
            args.fill = palette[args.series.index];
        }
    }
}
