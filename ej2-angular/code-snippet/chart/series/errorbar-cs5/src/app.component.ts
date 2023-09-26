

import { Component, OnInit } from '@angular/core';
import { errorData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='India' width=2 [marker]='marker' [errorBar]='errorBar'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public errorBar?: Object;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.chartData = errorData;
        this.marker = { visible: true };
        this.errorBar = { visible: true,  mode:'Vertical', direction:'Minus' };
        this.title = 'Unemployment rate (%)';
    }

}



