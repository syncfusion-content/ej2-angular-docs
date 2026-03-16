import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts'
import { BarSeriesService, StackingBarSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ BarSeriesService, StackingBarSeriesService, CategoryService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y' name='Apple'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y1' name='Orange' [cornerRadius]='cornerRadius'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' xName='x' yName='y2' name='Wastage' [cornerRadius]='cornerRadius'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    primaryYAxis: any;
    public cornerRadius?: object;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Months'
        };
        this.cornerRadius = { topRight: 10, bottomRight: 10 };
        this.title = 'Sales by year';
    }
    public pointRender(args: IPointRenderEventArgs) {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        }
        else {
            args.fill = '#009cb8';
        }
    }
}
