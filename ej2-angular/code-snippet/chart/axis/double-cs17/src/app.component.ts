

import { Component, OnInit } from '@angular/core';
import { groupingData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'
     useGroupingSeparator=true>
        <e-series-collection>
            <e-series [dataSource]='groupingData' type='Column' xName='x' yName='y' name='Product X' opacity=0.6></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public groupingData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.groupingData = groupingData;
        this.primaryXAxis = {
            title: 'Quantity',
            edgeLabelPlacement: 'Shift'
        };
        this.primaryYAxis = {
           title: 'Sales Amount in Millions',
        };
        this.title = 'Average Sales Comparison';
    }

}


