import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, DataLabelService, StackingLineSeriesService } from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [CategoryService, DataLabelService, StackingLineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [stackLabels]='stackLabels'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y' name='John' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y1' name='Peter' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y2' name='Steve' [marker]='marker'></e-series>
            <e-series [dataSource]='chartData' type='StackingLine' xName='x' yName='y3' name='Charle' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public marker?: Object;
    public chartData?: Object[];
    public stackLabels?: Object;

    ngOnInit(): void {
        this.primaryXAxis = {
            interval: 1,
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Expense',
            interval: 100,
            labelFormat: '${value}'
        };
        this.marker = { dataLabel: { visible: true } };
        this.stackLabels = { visible: true };
        this.chartData = chartData;
    }
}
