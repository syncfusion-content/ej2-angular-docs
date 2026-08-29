import { ChartModule, StepLineSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { stepData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [StepLineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StepLine' xName='x' yName='y' [marker]='marker' [emptyPointSettings]='emptyPointSettings'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    public emptyPointSettings?: Object;
    public marker?: Object;

    ngOnInit(): void {
        this.chartData = stepData;
        this.marker = { visible: true, width: 7, height: 7, isFilled: true };
        this.title = 'CO2 - Intensity Analysis';
        this.emptyPointSettings = {
            mode: 'Average',
            fill: '#800000',
            border: { color: '#00FFFF', width: 2 }
        };
    }
}

