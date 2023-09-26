

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
         width: '150', height: '100', border: { width: 1, color: 'pink'}
        };
        this.piedata = pieData;
    }

}


