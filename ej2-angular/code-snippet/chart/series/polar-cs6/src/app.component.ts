

import { Component, OnInit } from '@angular/core';
import { stackedData } from './datasource';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='StackingArea' name='Organic'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y1' drawType='StackingArea' name='Fair-trade'> </e-series>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y2' drawType='StackingArea' name='veg-Alternatives'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data?: Object[];


    ngOnInit(): void {
        this.data = stackedData;
        this.primaryXAxis = {
            valueType: 'Category',
        };
        this.title = 'Trend in Sales of Ethical Produce';

    }
}



