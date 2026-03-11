import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts'
import { HistogramSeriesService } from '@syncfusion/ej2-angular-charts'
import { points } from './datasource'
import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
imports: [
         ChartModule
    ],

providers: [HistogramSeriesService],
standalone: true,
    selector: 'app-container',
    template: ` <ejs-chart style='display:block;' align='center' id='chart-container' (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' (load)='load($event)'>
            <e-series-collection>
                <e-series [dataSource]='data' type='Histogram' yName='y' name='Score' width=2 [binInterval]='binInterval' showNormalDistribution='showNormalDistribution'
                [columnWidth]='columnWidth'> </e-series>
            </e-series-collection>
        </ejs-chart>`
})
export class AppComponent implements OnInit {
    public data: Object[] = [];
    public primaryXAxis: Object = {
        minimum: 0, maximum: 100
    };
    public primaryYAxis: Object = {
            minimum: 0, maximum: 50, interval: 10,
    };
    public points: number[] = points;
    public load(args: ILoadedEventArgs): void {
    points.map((value: number) => {
        this.data.push({
            y: value
        });
    });
    };
    public binInterval: number = 20;
    public columnWidth: number = 0.99;
    public showNormalDistribution: boolean = true;
    public pointRender(args: IPointRenderEventArgs)  {
            args.fill = '#009cb8';
    }
    ngOnInit(): void {

    }
}
