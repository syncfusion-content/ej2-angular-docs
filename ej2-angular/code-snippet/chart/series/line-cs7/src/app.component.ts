import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, MultiColoredLineSeriesService } from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';
import { splineData } from './datasource';

@Component({
    imports: [
        ChartModule
    ],
    providers: [CategoryService, MultiColoredLineSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='MultiColoredLine' xName='x' yName='y' name='London' width='2' [marker]='marker' pointColorMapping='color'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;

    ngOnInit(): void {
        this.chartData = splineData;
        this.marker = { visible: true, width: 10, height: 10 };
        this.primaryXAxis = {
            interval: 1,
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Temperature (°C)'
        };
        this.title = 'Climate Graph-2012';
    }
}
