import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, StackingColumnSeriesService } from '@syncfusion/ej2-angular-charts';


import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';
@Component({
imports: [
         ChartModule
    ],

providers: [CategoryService, StackingColumnSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y' name='UK' opacity='0.7'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y1' name='Germany' opacity='0.7'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y2' name='France' opacity='0.7'></e-series>
            <e-series [dataSource]='chartData' type='StackingColumn' xName='x' yName='y3' name='Italy' opacity='0.7'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    ngOnInit(): void {
        this.chartData = stackedData;
        this.primaryXAxis = {
            title: 'Years',
            interval: 1,
            valueType: 'Category'
        };
        this.title = 'Mobile Game Market by Country';
    }

}
