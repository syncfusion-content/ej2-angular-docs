import { ChartModule, LineSeriesService, ErrorBarService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

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
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public errorBar?: Object;

    ngOnInit(): void {
        this.chartData = [
            { x: 2006, y: 7.8 }, { x: 2007, y: 7.2 },
            { x: 2008, y: 6.8 }, { x: 2009, y: 10.7 },
            { x: 2010, y: 10.8 }, { x: 2011, y: 9.8 }
        ];
        this.primaryXAxis = {
            title: 'Year',
            minimum: 2005,
            maximum: 2012,
            interval: 1
        };
        this.marker = { visible: true };
        this.errorBar = { visible: true };
        this.title = 'Unemployment rate (%)';
    }
}
