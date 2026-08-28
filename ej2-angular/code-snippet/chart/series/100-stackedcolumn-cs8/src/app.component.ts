import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { CategoryService, StackingColumnSeriesService
 } from '@syncfusion/ej2-angular-charts';


import { Component, OnInit } from '@angular/core';
import { percentData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [CategoryService, StackingColumnSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (seriesRender)='seriesRender($event)' [primaryXAxis]='primaryXAxis' [title]='title'>
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
    public title?: string;
    ngOnInit(): void {
        this.chartData = percentData;
        this.primaryXAxis = {
            title: 'Years',
            interval: 1,
            valueType: 'Category'
        };
        this.title = 'Gross Domestic Product Growth';
    }
    public seriesRender(args: ISeriesRenderEventArgs) {
        if (args.series.index === 0) {
            args.fill = '#ff4251';
        }
        else if (args.series.index === 1) {
            args.fill = '#4C4C4C';
        }
        else if (args.series.index === 2) {
            args.fill = '#794F1B';
        }
        else if (args.series.index === 3) {
            args.fill = '#1a9a6f';
        }
    }
}
