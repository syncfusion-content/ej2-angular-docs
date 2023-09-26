


import { Component, OnInit } from '@angular/core';
import { double } from './datasource'

@Component({
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" [value]='value'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='StepLine' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    ngOnInit(): void {
        this.value = [12,30];
        this.chartData = double;
    }
}



