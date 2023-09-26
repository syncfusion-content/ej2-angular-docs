

import { Component, OnInit } from '@angular/core';
import { openData } from './datasource';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart style='display:block;' id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
                [title]='title' >
                <e-series-collection>
                    <e-series [dataSource]='data' type='HiloOpenClose' xName='x' high='high' low='low' open='open' close='close' name='SHIRPUR-G' bearFillColor= '#e56590' bullFillColor= '#f8b883'> </e-series>
                </e-series-collection>
     </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];

    ngOnInit(): void {
        this.data = openData;
        this.primaryXAxis = {
            title: 'Date',
            valueType: 'Category',
            };
        this.primaryYAxis = {
            title: 'Price in Dollar', minimum: 100, maximum: 200, interval: 20,
            };
        this.title = 'Financial Analysis';
    }
}



