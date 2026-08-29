import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, SplineSeriesService } from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';
import { splineData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [CategoryService, SplineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Spline' xName='x' yName='y' [emptyPointSettings]='emptyPointSettings' name='London' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public emptyPointSettings?: Object;
    public marker?: Object;

    ngOnInit(): void {
        this.chartData = splineData;
        this.primaryXAxis = {
            title: 'Month',
            valueType: 'Category'
        };
        this.marker = { visible: true };
        this.emptyPointSettings = {
            mode: 'Zero',
            fill: '#FF8C00',
            border: { width: 2, color: '#000080' }
        };
        this.title = 'Climate Graph-2012';
    }
}
