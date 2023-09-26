

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
@Component({
    selector: 'app-container',
    template: ` <ejs-chart id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='BoxAndWhisker' xName='x' yName='y' [marker]='marker' boxPlotMode='Normal'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    public marker?: Object;
    public tooltip?: Object;
    ngOnInit(): void {
        this.data = data;
        this.primaryXAxis = {
            valueType: 'Category',
            };
        this.title = 'Company Revenue and Profit';
        this.marker = { visible: true };

    }
}



