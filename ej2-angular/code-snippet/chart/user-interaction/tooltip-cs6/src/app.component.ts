

import { Component, OnInit } from '@angular/core';
import { toolData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" highlightColor="red" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='StepLine' xName='x' yName='y' width=2 name='China' [marker]='marker'></e-series>
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
        this.chartData = toolData;
        this.primaryXAxis = {
            valueType: 'DateTime'
        };
        this.tooltip = {
                enable: true,
                format: '${series.name} ${point.x} : ${point.y}',
                fill: '#7bb4eb',
                border: {
                   width: 2,
                   color: 'grey'
                }
        };
        this.marker = { visible: true, width: 10, height: 10 };
        this.title = 'Unemployment Rates 1975-2010';
    }
}


