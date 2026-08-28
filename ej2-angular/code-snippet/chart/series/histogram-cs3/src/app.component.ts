import { ChartModule, HistogramSeriesService } from '@syncfusion/ej2-angular-charts';
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { points } from './datasource';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [ChartModule],
    providers: [HistogramSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" align='center' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' (pointRender)='pointRender($event)'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Histogram' yName='y' name='Score' [width]='2' [binInterval]='binInterval' [showNormalDistribution]='showNormalDistribution' [columnWidth]='columnWidth'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis: Object = {
        minimum: 0,
        maximum: 100
    };
    public primaryYAxis: Object = {
        minimum: 0,
        maximum: 50,
        interval: 10
    };
    public data: Object[] = points.map((value: number) => ({ y: value }));
    public binInterval: number = 20;
    public columnWidth: number = 0.99;
    public showNormalDistribution: boolean = true;

    ngOnInit(): void {
    }

    public pointRender(args: IPointRenderEventArgs): void {
        args.fill = '#009cb8';
    }
}
