

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id='chartcontainer' [chartArea]='chartArea'  [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'>
        <e-series-collection>
            <e-series [dataSource]='chartData' [pointColorMapping]='pointColorMapping' type='Column' xName='x' yName='y' [cornerRadius]='cornerRadius'> </e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public cornerRadius?: Object;
    public chartArea?: Object;
    public animation?: Object;
    public pointColorMapping?: string;

    ngOnInit(): void {
        this.chartData = [
            { x: 'Jan', y: 6.96, color: "red" },
            { x: 'Feb', y: 8.9, color: "blue" },
            { x: 'Mar', y: 12, color: "orange" },
            { x: 'Apr', y: 17.5, color: "aqua" },
            { x: 'May', y: 22.1, color: "grey" }
        ];
        this.primaryXAxis = {
            valueType: 'Category', majorGridLines: { width: 0 }, title: 'Months'
        };
        this.primaryYAxis = {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}°C',
            title: 'Temperature'
        };
        this.title = 'USA CLIMATE - WEATHER BY MONTH';
        this.chartArea = {
            border: {
                width: 0
            }
        };
        this.cornerRadius = {
            topLeft: 10, topRight: 10
        };
        this.pointColorMapping = "color";
    }
}


