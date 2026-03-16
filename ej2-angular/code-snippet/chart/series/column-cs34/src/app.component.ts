import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService,
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService
 } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { cylindricalData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, DateTimeService, ScrollBarService, LineSeriesService, ColumnSeriesService,
        ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService,],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingColumn100' columnFacet= 'Cylinder' xName='x' yName='y' name='UK'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn100' columnFacet= 'Cylinder' xName='x' yName='y1' name='Germany'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn100' columnFacet= 'Cylinder' xName='x' yName='y2' name='France'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn100' columnFacet= 'Cylinder' xName='x' yName='y3' name='Italy'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = cylindricalData;
        this.primaryXAxis = {
            title: 'Years',
            interval: 1,
            valueType: 'DateTime',
            labelFormat: 'y'
        };
        this.primaryYAxis = {
            title: 'GDP (%) Per Annum',
            rangePadding: 'None',
            labelFormat: '{value}%'
        };
        this.title = 'Gross Domestic Product Growth';
    }

}
