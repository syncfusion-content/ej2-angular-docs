

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' type='Pie' [palettes]='palette'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public legendSettings?: Object;
    public palette?: string[];
    ngOnInit(): void {
        this.piedata = data;
        this.legendSettings = {
            visible: false
        };
        this.palette = ["#E94649", "#F6B53F", "#6FAAB0", "#FF33F3","#228B22","#3399FF"]
    }

}


