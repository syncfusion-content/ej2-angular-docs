import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ColumnSeriesService, LegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService, LegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings' [chartArea]='chartArea' [border]='border'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold' [border]='border1'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public border?: Object;
    public border1?: Object;
    public legendSettings?: Object;
    public chartArea?: Object;
    ngOnInit(): void {
        this.chartData = chartData;
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Countries'
        };
        this.primaryYAxis = {
            minimum: 0,
            maximum: 80,
            interval: 20,
            title: 'Medals'
        };
        this.title = 'Olympic Medals';
        this.border = { width: 2, color: 'green' };
        this.border1 = { width: 2, color: 'grey' };
        this.legendSettings = { visible: false };
        this.chartArea = {
            border: { width: 2, color: 'blue' },
            margin: { left: 50, right: 50, top: 50, bottom: 50 }
        };
    }

}
