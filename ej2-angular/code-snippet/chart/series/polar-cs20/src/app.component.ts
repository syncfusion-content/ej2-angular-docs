import { ChartModule, ChartAllModule } from '@syncfusion/ej2-angular-charts'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, ILoadedEventArgs, SplineSeriesService } from '@syncfusion/ej2-angular-charts'
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
imports: [
         ChartModule, ButtonModule, ChartAllModule
    ],

providers: [ AreaSeriesService, LineSeriesService, ExportService, ColumnSeriesService, StackingColumnSeriesService, StackingAreaSeriesService, RangeColumnSeriesService, ScatterSeriesService, PolarSeriesService, CategoryService, RadarSeriesService, SplineSeriesService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart #chart id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='exportData' type='Column' xName='x' yName='y' width=2> </e-series>
            </e-series-collection>
    </ejs-chart>
    <button ej-button id='print' (click)='export()'>Export</button>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public exportData?: Object[];
    @ViewChild('chart')
    public chart?: ChartComponent;
    ngOnInit(): void {
        this.exportData = [{ x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
        { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }];
        this.primaryXAxis = {
            title: 'Manager',
            valueType: 'Category',
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
            title: 'Sales',
            minimum: 0,
            maximum: 20000,
            majorGridLines: { width: 0 }
        };
        this.title = 'Sales Comparision';
    }
    export() {
        const header = {
            content: 'Chart Header',
            fontSize: 15
        };

        const footer = {
            content: 'Chart Footer',
            fontSize: 15,
        };
        this.chart?.exportModule.export('PDF', 'Chart', 1, [this.chart as ChartComponent], undefined, undefined, true, header, footer);
    }
}
