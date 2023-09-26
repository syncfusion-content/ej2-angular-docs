


import { Component, OnInit } from '@angular/core';
import { pyramidData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series width='60%' height='80%' type='Pyramid' [dataSource]='pyramidData' xName='x' yName='y'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public pyramidData?: Object[];
    ngOnInit(): void {
        this.pyramidData = pyramidData;
    }

}



