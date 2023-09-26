

import { Component, OnInit } from '@angular/core';
import { bubbleData } from './datasource';
@Component({
    selector: 'app-container',
    template: ` <ejs-chart style='display:block;' id='chart-container' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
                [title]='title' >
                <e-series-collection>
                    <e-series [dataSource]='data' type='Bubble' xName='x' yName='y' size='size' name='pound' fill='blue' [border]='border'> </e-series>
                </e-series-collection>
     </ejs-chart>`
})
export class AppComponent implements OnInit {
    public title?: string;
    public border: Object = {
        width: 1.5,
        color: 'black'
    };
    public data?: Object[];
    primaryXAxis: any;
    primaryYAxis: any;
    ngOnInit(): void {
    this.data = bubbleData;
    this.title = 'GDP vs Literacy Rate';
    }
}



