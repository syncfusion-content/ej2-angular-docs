

import { Component, OnInit } from '@angular/core';
import { categoryData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [legendSettings]='legendSettings'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Column' xName='country' yName='gold' name='Gold' ></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public legendSettings: Object = { visible: false};
    primaryYAxis: any;
    ngOnInit(): void {
        this.chartData = categoryData;
        this.primaryXAxis = {
           valueType: 'Category',
           multiLevelLabels:[{ categories: [
                        {
                            //Start and end values of the multi-level labels accepts number, date and sring values
                            start: -0.5,
                            end: 3.5,
                            //Multi-level label's text.
                            text: 'Half Yearly 1',

                        },
                        { start: 3.5, end: 7.5, text: 'Half Yearly 2' },
                    ]}]
        };
        this.title = 'Olympic Medals';
    }

}


