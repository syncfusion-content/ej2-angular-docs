import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { ColumnSeriesService, AreaSeriesService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { formatData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ ColumnSeriesService, AreaSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='formatData' type='Area' xName='x' yName='y' name='Product X' opacity=0.6></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public formatData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.formatData = formatData;
        this.primaryXAxis = {
            title: 'Year',
            edgeLabelPlacement: 'Shift'
        };
        this.primaryYAxis = {
           title: 'Sales Amount in Millions',
           labelFormat: 'c'
        };
        this.title = 'Average Sales Comparison';
    }

}
