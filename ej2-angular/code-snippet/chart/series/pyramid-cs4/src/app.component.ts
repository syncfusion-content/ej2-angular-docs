


import { Component, OnInit } from '@angular/core';
import { pyramidData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series  type='Pyramid' [dataSource]='pyramidData' xName='x' yName='y' [gapRatio]="gapRatio"></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public pyramidData?: Object[];
    public gapRatio: number = 0.2;
    ngOnInit(): void {
        this.pyramidData = pyramidData;
    }

}



