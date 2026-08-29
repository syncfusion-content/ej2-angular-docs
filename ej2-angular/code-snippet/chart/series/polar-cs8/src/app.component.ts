import { ChartModule, CategoryService, PolarSeriesService, StackingColumnSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, PolarSeriesService, StackingColumnSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y'  drawType='StackingColumn' name='UK'></e-series>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y1' drawType='StackingColumn' name='Germany'></e-series>
            <e-series [dataSource]='data' type='Polar' xName='x' yName='y2' drawType='StackingColumn' name='France'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public title?: string;
    public data?: Object[];

    ngOnInit(): void {
        this.data = chartData;
        this.primaryXAxis = {
            title: 'Year',
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Revenue'
        };
        this.title = 'Mobile Game Market by Country';
    }
}
