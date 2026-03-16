import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, SplineSeriesService, SplineSeriesService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
imports: [
         ChartModule, ButtonModule, ChartAllModule
    ],

providers: [ AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, SplineSeriesService, SplineSeriesService],
standalone: true,
    selector: 'app-container',
    template: ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='SplineArea' name='Gold'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    ngOnInit(): void {
        this.data = chartData;
        this.primaryXAxis = {
            title: 'Months'
        };
        this.primaryYAxis = {
            title: 'Temperature(Celsius)',
        };

        this.title = 'Maximum and Minimum Temperature';

    }
}
