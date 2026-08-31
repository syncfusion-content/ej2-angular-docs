import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { ColumnSeriesService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { groupingData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [ ColumnSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'
     [useGroupingSeparator]='true'>
        <e-series-collection>
            <e-series [dataSource]='groupingData' type='Column' xName='x' yName='y' name='Product X' opacity=0.6></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public groupingData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.groupingData = groupingData;
        this.primaryXAxis = {
            title: 'Quantity',
            valueType: 'Double',
            edgeLabelPlacement: 'Shift'
        };
        this.primaryYAxis = {
           title: 'Sales Amount in Millions',
           valueType: 'Double'
        };
        this.title = 'Average Sales Comparison';
    }

}
