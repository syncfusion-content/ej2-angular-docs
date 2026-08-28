import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { CategoryService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';
import { columnData } from './datasource';

@Component({
imports: [
         ChartModule
    ],

providers: [CategoryService, ColumnSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold' opacity='0.5'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    ngOnInit(): void {
        this.chartData = columnData;
        this.primaryXAxis = {
           valueType: 'Category',
           title: 'Countries'
        };
        this.title = 'Olympic Medals';
    }

}
