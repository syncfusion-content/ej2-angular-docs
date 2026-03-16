import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { AreaSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
    DateTimeService, CategoryService, MultiColoredAreaSeriesService, StackingStepAreaSeriesService, SplineRangeAreaSeriesService, DataLabelService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { percentData } from './datasource';
@Component({
imports: [
         ChartModule, ChartAllModule
    ],

providers: [ AreaSeriesService , RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
               DateTimeService, CategoryService, MultiColoredAreaSeriesService,StackingStepAreaSeriesService,SplineRangeAreaSeriesService, DataLabelService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [stackLabels]='stackLabels'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingStepArea' xName='x' yName='y' name='USA'></e-series [marker]='marker'>
            <e-series [dataSource]='chartData' type='StackingStepArea' xName='x' yName='y1' name='UK'></e-series [marker]='marker'>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    public stackLabels?:Object;
    ngOnInit(): void {
        this.chartData = percentData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.marker = { dataLabel: { visible: true } };
        this.stackLabels = { visible: true, fill: 'rgba(0, 123, 255, 0.5)', format: '{value}', angle: 45, rx: 10, ry: 10, margin: { left: 10, right: 10, top: 10, bottom: 10 }, border: { width: 2, color: '#000' }, font: { size: '14px', color: '#fff', weight: 'bold', family: 'Arial', textAlignment: 'Left' } };
        this.title = 'Annual Temperature Comparison';
    }

}
