import { ChartModule, CategoryService, PolarSeriesService, StackingAreaSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, PolarSeriesService, StackingAreaSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y'  drawType='StackingArea' name='Organic'></e-series>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y1' drawType='StackingArea' name='Fair-trade'></e-series>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y2' drawType='StackingArea' name='veg-Alternatives'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public title?: string;
    public data?: Object[];

    ngOnInit(): void {
        this.data = chartData;
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Sales'
        };
        this.title = 'Trend in Sales of Ethical Produce';
    }
}
