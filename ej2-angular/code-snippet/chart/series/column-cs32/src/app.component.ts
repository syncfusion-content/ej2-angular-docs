

import { Component, OnInit } from '@angular/core';
import { cylindricalData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' columnFacet= 'Cylinder' xName='country' yName='gold' tooltipMappingName='tooltipMappingName'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public tooltip?: Object;
    ngOnInit(): void {
        this.chartData = cylindricalData;
        this.primaryXAxis = {
            valueType: 'Category',
            interval: 1
        };
        this.primaryYAxis = {
            minimum: 0,
            maximum: 80,
            interval: 10,
            title: 'Medal Count'
        };
        this.title = 'Olympic Gold Medal Counts - RIO';
        this.tooltip = { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" };
    }

}


