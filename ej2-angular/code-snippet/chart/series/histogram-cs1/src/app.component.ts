

import { Component, OnInit } from '@angular/core';
import { ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart style='display:block;' align='center' id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' (load)='load($event)'>
            <e-series-collection>
                <e-series [dataSource]='data' type='Histogram' yName='y' name='Score' width=2 [binInterval]='binInterval' showNormalDistribution='showNormalDistribution'
                [columnWidth]='columnWidth'> </e-series>
            </e-series-collection>
        </ejs-chart>`
})
export class AppComponent implements OnInit {
    public data: Object[] = [];
    public primaryXAxis: Object = {
        minimum: 0, maximum: 100
    };
    public primaryYAxis: Object = {
            minimum: 0, maximum: 50, interval: 10,
    };
    public load(args: ILoadedEventArgs): void {
        let points: number[] = [5.250, 7.750, 0, 8.275, 9.750, 7.750, 8.275, 6.250, 5.750,
        5.250, 23.000, 26.500, 27.750, 25.025, 26.500, 26.500, 28.025, 29.250, 26.750, 27.250,
        26.250, 25.250, 34.500, 25.625, 25.500, 26.625, 36.275, 36.250, 26.875, 40.000, 43.000,
        46.500, 47.750, 45.025, 56.500, 56.500, 58.025, 59.250, 56.750, 57.250,
        46.250, 55.250, 44.500, 45.525, 55.500, 46.625, 46.275, 56.250, 46.875, 43.000,
        46.250, 55.250, 44.500, 45.425, 55.500, 56.625, 46.275, 56.250, 46.875, 43.000,
        46.250, 55.250, 44.500, 45.425, 55.500, 46.625, 56.275, 46.250, 56.875, 41.000, 63.000,
        66.500, 67.750, 65.025, 66.500, 76.500, 78.025, 79.250, 76.750, 77.250,
        66.250, 75.250, 74.500, 65.625, 75.500, 76.625, 76.275, 66.250, 66.875, 80.000, 85.250,
        87.750, 89.000, 88.275, 89.750, 97.750, 98.275, 96.250, 95.750, 95.250
    ];
    points.map((value: number) => {
        this.data.push({
            y: value
        });
    });
    };
    public binInterval: number = 20;
    public columnWidth: number = 0.99;
    public showNormalDistribution: boolean = true;

    ngOnInit(): void {

    }
}


