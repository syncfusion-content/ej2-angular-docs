

import { Component, OnInit } from '@angular/core';
import { radarData } from './datasource';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Polar' xName='x' yName='y' drawType='Line'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data?: Object[];
    ngOnInit(): void {
        this.data = radarData;
        this.primaryXAxis = {
            title: 'Year', coefficient: 50,
            minimum: 2004, maximum: 2012, interval: 1
        };
        this.title = 'Efficiency of oil-fired power production';

    }
}



