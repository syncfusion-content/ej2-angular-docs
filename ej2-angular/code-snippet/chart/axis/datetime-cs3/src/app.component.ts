import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         ChartModule
    ],

providers: [ DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Sales'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = [
                 { x: new Date(2000, 6, 11), y: 10 }, { x: new Date(2002, 3, 7), y: 30 },
                 { x: new Date(2004, 3, 6), y: 15 }, { x: new Date(2006, 3, 30), y: 65 },
                 { x: new Date(2008, 3, 8), y: 90 }, { x: new Date(2010, 3, 8), y: 85 }
        ];
        this.primaryXAxis = {
            valueType: 'DateTime',
            title: 'Sales Across Years',
            labelFormat: 'yMMM',
            minimum: new Date(2000, 6, 1),
            maximum: new Date(2010, 6, 1)
        };
        this.primaryYAxis = {
           title: 'Sales Amount in millions(USD)'
        };
        this.title = 'Average Sales Comparison';
    }

}
