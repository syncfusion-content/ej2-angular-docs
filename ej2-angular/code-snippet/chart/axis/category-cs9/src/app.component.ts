

import { Component, OnInit } from '@angular/core';
import { categoryData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container"  [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold' ></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis: any;
    
    ngOnInit(): void {
        this.chartData = categoryData;
        this.primaryXAxis = {
           valueType: 'Category',
           title: 'Countries',
           labelPosition: 'Inside'
        };
        this.title = 'Olympic Medals';
    }

}


