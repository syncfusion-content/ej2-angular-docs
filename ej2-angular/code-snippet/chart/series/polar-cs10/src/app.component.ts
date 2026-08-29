import { ChartModule, CategoryService, PolarSeriesService, ScatterSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { polarCategory } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, PolarSeriesService, ScatterSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Scatter' name='London'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public title?: string;
    public data?: Object[];

    ngOnInit(): void {
        this.data = polarCategory;
        this.primaryXAxis = {
            title: 'Month',
            valueType: 'Category'
        };
        this.primaryYAxis = {
            minimum: -5,
            maximum: 35,
            interval: 10,
            title: 'Temperature in Celsius',
            labelFormat: '{value}C'
        };
        this.title = 'Climate Graph-2012';
    }
}
