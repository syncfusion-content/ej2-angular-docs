import { ChartModule, BubbleSeriesService } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';
import { bubbleData } from './datasource';

@Component({
    imports: [ChartModule],
    providers: [BubbleSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Bubble' xName='x' yName='y' size='size' name='pound'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public title?: string;
    public data?: Object[];
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;

    ngOnInit(): void {
        this.primaryXAxis = {
            title: 'Literacy Rate',
            minimum: 60,
            maximum: 100,
            interval: 5
        };
        this.primaryYAxis = {
            title: 'GDP Growth Rate',
            minimum: 0,
            maximum: 16,
            interval: 2
        };
        this.data = bubbleData;
        this.title = 'GDP vs Literacy Rate';
    }
}
