import { ChartModule } from '@syncfusion/ej2-angular-charts'
import {
    ColumnSeriesService, DataLabelService, CategoryService, LegendService, TooltipService, LastValueLabelService
} from '@syncfusion/ej2-angular-charts'


import { Component, OnInit } from '@angular/core';

@Component({
    imports: [
        ChartModule
    ],

    providers: [ColumnSeriesService, DataLabelService, CategoryService, LegendService, TooltipService, LastValueLabelService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart id="chart-container"  [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip' [width]='width'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='series1' [marker]='marker' [lastValueLabel]='lastValueLabel'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public title?: string;
    public width?: string;
    public tooltip?: Object;
    public lastValueLabel?: Object;
    public chartData?: Object[];
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public marker?: Object;
    ngOnInit(): void {
        this.chartData = [
            { x: 2005, y: 28 }, { x: 2006, y: 25 }, { x: 2007, y: 26 }, { x: 2008, y: 27 },
            { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 40 }
        ];
        this.lastValueLabel = { enable: true, background: "blue", lineColor: "red", lineWidth: 2, dashArray: "5,5", rx: 10, ry: 10, border: { width: 2, color: "red" }, font: { color: "white", size: "12px", fontWeight: "bold" } };
        this.width = '90%';
        this.primaryXAxis = {
            title: 'Year',
            interval: 1
        };
        this.primaryYAxis = {
            title: 'Efficiency',
            labelFormat: '{value}%'
        };
        this.tooltip = { enable: true };
        this.marker = { visible: false, dataLabel: { visible: true } };
        this.title = 'Efficiency of oil-fired power production';
    }
}
