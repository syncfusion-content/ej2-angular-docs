

import { Component, OnInit } from '@angular/core';
import { splineData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Pareto' xName='x' yName='y' name='Defect' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public marker?: Object;
    public tooltip?: Object;
    ngOnInit(): void {
        this.chartData = [
                    { x: 'Traffic', y: 56 }, { x: 'Child Care', y: 44.8 },
                    { x: 'Transport', y: 27.2 }, { x: 'Weather', y: 19.6 },
                    { x: 'Emergency', y: 6.6 }
                ];
        this.primaryXAxis = {
            title: 'Defects',
            valueType: 'Category',
        };
        this.marker = { visible: true, width: 10, height: 10 };
        this.primaryYAxis = {
         title: 'Frequency',
            minimum: 0,
            maximum: 150,
            interval: 30,

        };
        this.tooltip = { enable: true, shared: true }
        this.title = 'Climate Graph-2012';
    }

}


