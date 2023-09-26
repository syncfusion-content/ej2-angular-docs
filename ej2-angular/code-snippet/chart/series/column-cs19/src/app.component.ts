

import { Component, OnInit } from '@angular/core';
import { data1 } from './datasource';
import { data2 } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data1' type='RangeColumn' xName='x' low='low' high='high'></e-series>
            <e-series [dataSource]='data2' type='RangeColumn' xName='x' low='low' high='high'></e-series>
        </e-series-collection>
    </ejs-chart>`
})

export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data1?: Object[];
    public data2?: Object[];
    primaryYAxis: any;
    ngOnInit(): void {
        this.data1 = data1;
        this.data2 = data2;
        this.primaryXAxis = {
            title: 'month',
            valueType: 'Category'
        };
        this.title = 'Maximum and minimum Temperature';
    }
}


