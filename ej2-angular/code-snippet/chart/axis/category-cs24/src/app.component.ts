import { Component, OnInit } from '@angular/core';
import { ChartModule, CategoryService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [ChartModule],
    providers: [CategoryService, ColumnSeriesService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData1' type='Column' xName='x' yName='y' name='Series 1'></e-series>
            <e-series [dataSource]='chartData2' type='Column' xName='x' yName='y' name='Series 2'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData1?: Object[];
    public chartData2?: Object[];
    public title?: string;

    ngOnInit(): void {
        // Two series share overlapping categories. With isIndexed=true, points
        // are aligned by index, so the same x-position shows values from
        // both series even when their category sets differ.
        this.chartData1 = [
            { x: 'Myanmar', y: 7.3 },
            { x: 'India', y: 7.9 },
            { x: 'Bangladesh', y: 6.8 },
            { x: 'Cambodia', y: 7.0 },
            { x: 'China', y: 6.9 }
        ];
        this.chartData2 = [
            { x: 'Poland', y: 2.7 },
            { x: 'Australia', y: 2.5 },
            { x: 'Singapore', y: 2.0 },
            { x: 'Canada', y: 1.4 },
            { x: 'Germany', y: 1.8 }
        ];
        this.primaryXAxis = {
            valueType: 'Category',
            isIndexed: true
        };
        this.title = 'Olympic Medals';
    }
}
