

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ej-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [emptyPointSettings]='empty'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ej-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    empty?: Object;
    ngOnInit(): void {
        this.piedata = [
                { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
                { x: 'Mar', y: null, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
                { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
                { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: undefined, text: 'Aug: 25' },
                { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' }];
        this.empty = {
            mode: 'Average', fill: 'pink', border: { width: 2, color: 'black'}
        }
    }

}


