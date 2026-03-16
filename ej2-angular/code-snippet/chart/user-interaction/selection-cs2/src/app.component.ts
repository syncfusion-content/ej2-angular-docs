import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts'
import { LegendService, SelectionService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';
import { selectionData } from './datasource';

@Component({
imports: [
         ChartModule
    ],

providers: [ CategoryService, ColumnSeriesService, LegendService, SelectionService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' selectionMode='Series'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold' ></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='silver' name='Silver'></e-series>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='bronze' name='Bronze' ></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = selectionData;
        this.primaryXAxis = {
           valueType: 'Category'
        };
        this.title = 'Olympic Medals';
    }

}
