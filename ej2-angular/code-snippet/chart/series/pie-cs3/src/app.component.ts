

import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-annotations>
            <e-accumulation-annotation content='<div style="border: 1px solid black;background-color:#f5f5f5; padding: 5px 5px 5px 5px">Jan : 3</div>'
             region='Series' coordinateUnits='Point' x='Jan' y=3>
            </e-accumulation-annotation>
        </e-accumulation-annotations>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    ngOnInit(): void {
        this.piedata = pieData;

}
}

