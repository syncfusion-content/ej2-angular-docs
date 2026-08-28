import { ChartModule, PolarSeriesService, ColumnSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [PolarSeriesService, ColumnSeriesService, CategoryService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Column' name='Gold'></e-series>
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
            title: 'Medals'
        };
        this.title = 'Olympic Medals';
    }
}
