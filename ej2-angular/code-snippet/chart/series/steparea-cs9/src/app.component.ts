import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { IPointRenderEventArgs } from '@syncfusion/ej2-charts'
import { AreaSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
    DateTimeService, CategoryService, MultiColoredAreaSeriesService, StackingStepAreaSeriesService, SplineRangeAreaSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { stepData } from './datasource';
@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [ AreaSeriesService , RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
               DateTimeService, CategoryService, MultiColoredAreaSeriesService,StackingStepAreaSeriesService,SplineRangeAreaSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" (pointRender)='pointRender($event)' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StepArea' xName='x' yName='y' [marker]='marker' name='England'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = stepData;
        this.primaryXAxis = {
            valueType: 'Double',
            title: 'Overs'
        };
        this.primaryYAxis = {
            title: 'Runs'
        };
        this.marker = { visible: true };
        this.title = 'England - Run Rate';
    }
    public pointRender(args: IPointRenderEventArgs) {
            args.fill = 'red';
    }
}
