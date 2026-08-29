import { ChartModule, CategoryService, HiloOpenCloseSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { openData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, HiloOpenCloseSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='HiloOpenClose' xName='x' high='high' low='low' open='open' close='close' name='SHIRPUR-G' [emptyPointSettings]='emptyPointSettings'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public emptyPointSettings?: Object;

    ngOnInit(): void {
        this.chartData = openData;
        this.primaryXAxis = {
            title: 'Date',
            valueType: 'Category'
        };
        this.primaryYAxis = {
            title: 'Price in Dollar',
            minimum: 100,
            maximum: 200,
            interval: 20
        };
        this.emptyPointSettings = {
            mode: 'Average',
            fill: 'blue'
        };
        this.title = 'Financial Analysis';
    }
}
