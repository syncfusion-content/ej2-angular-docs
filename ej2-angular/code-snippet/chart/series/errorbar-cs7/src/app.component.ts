import { ChartModule, LineSeriesService, ErrorBarService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { errorData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [LineSeriesService, ErrorBarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='India' width='2' [marker]='marker' [errorBar]='errorBar'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData: Object[] = errorData;
    public title?: string;
    public marker?: Object;
    public errorBar?: Object;

    ngOnInit(): void {
        this.primaryXAxis = {
            title: 'Year',
            minimum: 2005,
            maximum: 2012,
            interval: 1
        };
        this.marker = { visible: true };
        this.errorBar = { visible: true, errorBarColorMapping: 'color', verticalError: 'error' };
        this.title = 'Unemployment rate (%)';
    }
}
