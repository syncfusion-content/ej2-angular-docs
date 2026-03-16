import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, CategoryService, LineSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts'
import { LegendService, DataLabelService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { columnData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ DateTimeService, LineSeriesService, LegendService, DataLabelService, ColumnSeriesService, CategoryService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Warmest' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = columnData;
        this.primaryXAxis = {
            title: 'Months',
            valueType: 'Category', labelFormat: 'yMMM',
            edgeLabelPlacement: 'Shift'
        };
        this.marker = { dataLabel: { visible: true, format: 'p1'}
        };
        this.title = 'Alaska Weather Statistics - 2016';
    }

}
