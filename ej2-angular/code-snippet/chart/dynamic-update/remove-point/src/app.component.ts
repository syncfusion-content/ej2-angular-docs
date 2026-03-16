import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ChartComponent, SplineSeriesService, CategoryService, LegendService, DataLabelService } from '@syncfusion/ej2-angular-charts';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
imports: [
         ChartModule, ButtonModule
    ],

providers: [ SplineSeriesService, CategoryService, LegendService, DataLabelService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-chart #chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings' [chartArea]='chartArea'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Spline' xName='x' yName='y' name='Users' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>
    <button ej-button id='remove' (click)='click()'>Remove Point</button>`
})
export class AppComponent implements OnInit {
    @ViewChild('chart')
    public chart?: ChartComponent;
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[] = [
        { x: "Germany", y: 72 },
        { x: "Russia", y: 103.1 },
        { x: "Brazil", y: 139.1 },
        { x: "India", y: 462.1 },
        { x: "China", y: 721.4 },
        { x: "USA", y: 286.9 },
        { x: "Great Britain", y: 115.1 },
        { x: "Nigeria", y: 97.2 }
    ];
    public title?: string;
    public marker?: Object;
    public legendSettings?: Object;
    public chartArea?: Object;
    ngOnInit(): void {
        this.primaryXAxis = {
            valueType: 'Category',
            enableTrim: false,
            majorTickLines: { width: 0 },
            majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
            minimum: 0,
            maximum: 800,
            labelFormat: '{value}M',
            edgeLabelPlacement: 'Shift'
        };
        this.title = 'Internet Users - 2016';
        this.marker = {
            visible: true,
            dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600' }
            }
        };
        this.legendSettings = { visible: false };
        this.chartArea = {
            border: { width: 1 }
        };
    }
    click() {
        if (this.chart?.series?.length) {
            if (typeof this.chart.series[0].removePoint === 'function') {
        this.chart?.series[0].removePoint(0);
            }
        }
    }
}
