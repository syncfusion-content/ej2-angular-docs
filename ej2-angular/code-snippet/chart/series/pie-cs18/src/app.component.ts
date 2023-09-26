

import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'  legendShape='Circle'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public legendSettings?: Object;
    ngOnInit(): void {
        this.legendSettings = {
        width: '260px', height: '50px', position: "Bottom", itemPadding: 30
        };
        this.piedata = pieData;
    }

}


