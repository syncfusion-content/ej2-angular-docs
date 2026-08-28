import { ChartModule, RadarSeriesService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [RadarSeriesService, LineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Radar' xName='x' yName='y' drawType='Line'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public title?: string;
    public data?: Object[];

    ngOnInit(): void {
        this.data = chartData;
        this.title = 'Efficiency of oil-fired power production';
    }
}
