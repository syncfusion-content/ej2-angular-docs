

import { Component, OnInit } from '@angular/core';
import { labelData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" width='450px' [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='Internet'></e-series>>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = labelData;
        this.primaryXAxis = {
           title: 'Countries',
           valueType: 'Category',
           labelIntersectAction: 'Rotate45'
        };
        this.primaryYAxis = {
           minimum: 0, maximum: 80, interval: 10,
           title: 'People(in millions)'
        };
        this.title = 'Internet Users';
    }

}


