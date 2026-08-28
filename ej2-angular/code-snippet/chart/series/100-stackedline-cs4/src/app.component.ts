import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, StackingLineSeriesService } from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [CategoryService, StackingLineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y' name='John' [marker]='marker' width='5'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y1' name='Peter' [marker]='marker' width='5'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y2' name='Steve' [marker]='marker' width='5'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine100' xName='x' yName='y3' name='Charle' [marker]='marker' width='5'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public marker?: Object;
    public chartData?: Object[];

    ngOnInit(): void {
        this.primaryXAxis = {
            interval: 1,
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Percentage',
            interval: 25,
            labelFormat: '{value}%'
        };
        this.chartData = chartData;
        this.marker = { visible: true };
    }
}
