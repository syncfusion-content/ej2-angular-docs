import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts'
import { CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService,
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService
 } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { percentData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService,
        ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService,],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingColumn100' xName='x' yName='y' name='UK'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn100' xName='x' yName='y1' name='Germany'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn100' xName='x' yName='y2' name='France'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn100' xName='x' yName='y3' name='Italy'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public emptyPointSettings?: Object;
    public emptyPointSettings1?: Object;
    public title?: string;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = percentData;
        this.primaryXAxis = {
            title: 'Years',
            interval: 1,
            valueType: 'Category'
        };
        this.title = 'Gross Domestic Product Growth';
    }
    public pointRender(args: IPointRenderEventArgs) {
        if (args.point.index === 0 && args.point.series.index === 3) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
        if (args.point.index === 3 && args.point.series.index === 3) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
        if (args.point.index === 4 && args.point.series.index === 3) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
        if (args.point.index === 6 && args.point.series.index === 3) {
            args.cornerRadius = { topLeft: 10, bottomLeft: 0, topRight: 10, bottomRight: 0 };
        }
    }
}
