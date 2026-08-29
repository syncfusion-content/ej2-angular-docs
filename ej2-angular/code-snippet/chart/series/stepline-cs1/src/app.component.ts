import { ChartModule, StepLineSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { stepData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [StepLineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `
     <svg>
        <defs>
            <linearGradient id="gradient">
                <stop offset="0%" style="stop-color:#FF0000;stop-opacity:5" />
                <stop offset="70%" style="stop-color:#00FF00;stop-opacity:5" />
            </linearGradient>
        </defs>
    </svg>
    <ejs-chart id="chart-container" [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StepLine' xName='x' yName='y' name='USA' [fill]="'url(#gradient)'" ></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    ngOnInit(): void {
        this.chartData = stepData;
        this.title = 'CO2 - Intensity Analysis';
    }

}
