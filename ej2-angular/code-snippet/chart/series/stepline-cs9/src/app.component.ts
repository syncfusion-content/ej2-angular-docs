import { ChartModule, StepLineSeriesService } from '@syncfusion/ej2-angular-charts';
import { ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
import { Component, OnInit } from '@angular/core';
import { stepData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [StepLineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (seriesRender)='seriesRender($event)' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StepLine' xName='x' yName='y' name='USA'></e-series>
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

    public seriesRender(args: ISeriesRenderEventArgs): void {
        args.fill = '#ff6347';
    }
}
