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
            <e-series [dataSource]='chartData' type='StepLine' xName='x' yName='y' fill='blue'></e-series>
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

