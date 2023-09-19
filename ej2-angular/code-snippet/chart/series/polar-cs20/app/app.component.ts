

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { exportData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart #chart id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' width=2> </e-series>
            </e-series-collection>
    </ejs-chart>   
    <button ej-button id='print' (click)='export()'>Export</button>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    @ViewChild('chart')
    public chart?: ChartComponent;
    ngOnInit(): void {
        this.chartData = exportData;
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
        this.chart?.exportModule.export('PDF', 'Chart', 1, [this.chart as ChartComponent], null, null, true, header, footer);
    }
}



