import { ChartModule, PolarSeriesService, SplineAreaSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [PolarSeriesService, SplineAreaSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='SplineArea' name='Gold'></e-series>
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
            title: 'Year'
        };
        this.primaryYAxis = {
            title: 'Temperature (Celsius)'
        };
        this.title = 'Maximum and Minimum Temperature';
    }
}
