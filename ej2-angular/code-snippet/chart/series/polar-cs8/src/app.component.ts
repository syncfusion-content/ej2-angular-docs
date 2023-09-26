

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='StackingColumn' name='UK'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y1' drawType='StackingColumn' name='Germany'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y2' drawType='StackingColumn' name='France'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y2' drawType='StackingColumn' name='Italy'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data?: Object[];
    ngOnInit(): void {
        this.data = data;
        this.primaryXAxis = {
            title: 'Years',
            valueType: 'Category'
        };
        this.title = 'Mobile Game Market by Country';

    }
}



