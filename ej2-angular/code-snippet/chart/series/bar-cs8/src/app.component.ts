import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { StackingBarSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [StackingBarSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container">
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingBar' columnFacet= 'Cylinder' xName='x' yName='y'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' columnFacet= 'Cylinder' xName='x' yName='y1'></e-series>
            <e-series [dataSource]='chartData' type='StackingBar' columnFacet= 'Cylinder' xName='x' yName='y2'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    ngOnInit(): void {
        this.chartData = stackedData;
    }

}
