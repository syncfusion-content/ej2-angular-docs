import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import {
    CategoryService,
    LegendService,
    DataLabelService,
    LineSeriesService,
    IAnimationCompleteEventArgs,
} from '@syncfusion/ej2-angular-charts';

import { Component, OnInit } from '@angular/core';

@Component({
    imports: [ChartModule, ChartAllModule],

    providers: [
        CategoryService,
        LegendService,
        DataLabelService,
        LineSeriesService,
    ],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [legendSettings]='legendSettings' [title]='title' (animationComplete)="onAnimationComplete($event)">
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='month' yName='sales' name='Sales' [marker]='marker' [animation]="animation"></e-series>
        </e-series-collection>
    </ejs-chart>`,
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public primaryYAxis?: Object;
    public legendSettings?: Object;
    public marker?: Object;
    public animation?: Object;
    public title?: string;
    ngOnInit(): void {
        // Data label for chart series
        this.marker = {
            dataLabel: {
                visible: true,
            },
        };
        this.animation = {
            enable: true,
            duration: 1000, // ms
            delay: 0,
        };
        this.chartData = [
            { month: 'Jan', sales: 35 },
            { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 },
            { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 },
            { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 },
            { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 },
            { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 },
            { month: 'Dec', sales: 32 },
        ];
        this.primaryXAxis = {
            valueType: 'Category',
        };
        this.primaryYAxis = {
            labelFormat: '${value}K',
        };
        this.legendSettings = {
            visible: true,
        };
        this.title = 'Sales Analysis';
    }
    // Trigger when series animation finishes rendering
    public onAnimationComplete(args: IAnimationCompleteEventArgs): void {
        console.log('Chart animation complete event was triggered');
    }
}
