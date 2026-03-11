import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { BarSeriesService, StackingBarSeriesService, CategoryService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { cylindricalData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ BarSeriesService, StackingBarSeriesService, CategoryService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingBar100' columnFacet= 'Cylinder' xName='x' yName='y'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar100' columnFacet= 'Cylinder' xName='x' yName='y1'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar100' columnFacet= 'Cylinder' xName='x' yName='y2'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = cylindricalData;
    }
}
