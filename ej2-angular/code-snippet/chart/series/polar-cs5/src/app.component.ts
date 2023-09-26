

import { Component, OnInit } from '@angular/core';
import { polarCategory } from './datasource';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Area' name='London'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    ngOnInit(): void {
        this.data = polarCategory;
        this.primaryXAxis = {
            title: 'Month',
            valueType: 'Category'
        };
        this.primaryYAxis = {
            minimum: -5, maximum: 35, interval: 10,
            title: 'Temperature in Celsius',
            labelFormat: '{value}C'
        };

        this.title = 'Climate Graph-2012';

    }
}



