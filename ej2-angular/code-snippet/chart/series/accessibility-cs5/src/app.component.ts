import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ScatterSeriesService, TrendlinesService, TooltipService, LineSeriesService, LegendService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

let data: Object[] = [];
let yValue: number[] = [7.66, 8.03, 8.41, 8.97, 8.77, 8.20, 8.16, 7.89, 8.68, 9.48, 10.11, 11.36, 12.34, 12.60, 12.95, 13.91, 16.21, 17.50, 22.72, 28.14, 31.26, 31.39, 32.43, 35.52, 36.36,
    41.33, 43.12, 45.00, 47.23, 48.62, 46.60, 45.28, 44.01, 45.17, 41.20, 43.41, 48.32, 45.65, 46.61, 53.34, 58.53];
let point: Object;
let i: number; let j: number = 0;
for (i = 1973; i <= 2013; i++) {
    point = { x: i, y: yValue[j] };
    data.push(point);
    j++;
}
@Component({
    imports: [ChartModule],
    providers: [ScatterSeriesService, TrendlinesService, TooltipService, LineSeriesService, LegendService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id='chartcontainer' [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [chartArea]= 'chartArea' [tooltip]='tooltip' [legendSettings]='legendSettings'>
            <e-series-collection>
                <e-series [dataSource]='chartData' type='Scatter' xName='x' yName='y' fill='#0066FF' name='Apple Inc'>
                     <e-trendlines>
                        <e-trendline type='Linear' [accessibility]='accessibility'>
                        </e-trendline>
                    </e-trendlines>
                    </e-series>
            </e-series-collection>
        </ejs-chart>`
})

export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public chartArea?: Object;
    public tooltip?: Object;
    public accessibility?: Object;
    public legendSettings?: Object;
    ngOnInit(): void {
        this.chartData = data;
        this.primaryXAxis = {
            title: 'Months'
        };
        this.primaryYAxis = {
            title: 'Rupees against Dollars',
            interval: 5
        };
        this.title = 'Historical Indian Rupee Rate (INR USD)';
        this.chartArea = { border: { width: 0 } };
        this.tooltip = { enable: true };
        this.accessibility = {
            accessibilityDescription: 'A linear trendline representing the general trend of the historical Indian Rupee rate against the US Dollar.',
            accessibilityRole: 'line'
        };
        this.legendSettings = { visible: false };
    }

}
