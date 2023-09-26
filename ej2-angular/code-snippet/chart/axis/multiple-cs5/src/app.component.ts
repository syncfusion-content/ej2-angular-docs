

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Internet'></e-series>>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public majorGridLines?: Object;
    public primaryYAxis?: Object;
    public lineStyle?: Object;
    ngOnInit(): void {
        this.chartData = [
                { x: "South Korea", y: 39.4 }, { x: "India", y: 61.3 }, { x: "Pakistan", y: 20.4 },
                { x: "Germany", y: 65.1 }, { x: "Australia", y: 15.8 }, { x: "Italy", y: 29.2 },
                { x: "France", y: 44.6 }, { x: "Saudi Arabia", y: 9.7 }, { x: "Russia", y: 40.8 },
                { x: "Mexico", y: 31 }, { x: "Brazil", y: 75.9 }, { x: "China", y: 51.4 }
        ];
        this.primaryXAxis = {
           title: 'Countries',
           valueType: 'Category',
           labelIntersectAction: 'Rotate45'
        };
        this.primaryYAxis = {
           minimum: 0, maximum: 80, interval: 10,
           title: 'People(in millions)'
        };
        this.majorGridLines = { width: 0};
        this.lineStyle = { width: 0};
        this.title = 'Internet Users';
    }

}


