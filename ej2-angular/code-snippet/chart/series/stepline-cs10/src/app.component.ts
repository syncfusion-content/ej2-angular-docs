import { ChartModule, StepLineSeriesService } from '@syncfusion/ej2-angular-charts';
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { Component, OnInit } from '@angular/core';
import { stepData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [StepLineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StepLine' xName='x' yName='y' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;

    ngOnInit(): void {
        this.chartData = stepData;
        this.title = 'CO2 - Intensity Analysis';
        this.marker = { visible: true };
    }

    public pointRender(args: IPointRenderEventArgs): void {
        if (args.point.index % 2 !== 0) {
            args.fill = '#ff6347';
        } else {
            args.fill = '#009cb8';
        }
    }
}

