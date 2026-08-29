import { ChartModule, PolarSeriesService, AreaSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [PolarSeriesService, AreaSeriesService, CategoryService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Area' name='London'></e-series>
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
            title: 'Year',
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
