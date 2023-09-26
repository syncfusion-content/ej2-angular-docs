

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
        `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='India' width=2 [marker]='marker' [errorBar]='errorBar'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData: Object[] = [
        { x: 2006, y: 7.8, color: 'red', error: 1.5 },
        { x: 2007, y: 7.2, color: 'green', error: 2.5 },
        { x: 2008, y: 6.8, color: 'blue', error: 3.5 },
        { x: 2009, y: 5.7, color: 'yellow', error: 1.5 },
        { x: 2010, y: 10.8, color: 'grey', error: 0.5 },
        { x: 2011, y: 9.8, color: 'brown', error: 1 },
    ];
    public title?: string;
    public marker?: Object;
    public errorBar?: Object;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.primaryXAxis = {
            minimum: 2005, maximum: 2012, interval: 1,
            title: 'Year'
        };
        this.marker = { visible: true };
        this.errorBar = { visible: true, errorBarColorMapping: 'color', verticalError: 'error' };
        this.title = 'Unemployment rate (%)';
    }
}



