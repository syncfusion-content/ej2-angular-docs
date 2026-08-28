import { ChartModule, PolarSeriesService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { radarData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [PolarSeriesService, LineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Line' [marker]='marker' [emptyPointSettings]='emptyPointSettings'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data?: Object[];
    public emptyPointSettings?: Object;
    public marker?: Object;

    ngOnInit(): void {
        this.data = radarData;
        this.primaryXAxis = {
            title: 'Year',
            startAngle: 90,
            minimum: 2004,
            maximum: 2012,
            interval: 1
        };
        this.marker = {visible: true};
        this.emptyPointSettings = {
            mode: 'Zero',
            fill: 'red',
            border: { width: 2, color: 'blue' }
        };
        this.title = 'Efficiency of oil-fired power production';
    }
}
