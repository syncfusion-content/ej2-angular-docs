

import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [startAngle]='startAngle' [endAngle]='endAngle' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public startAngle?: number;
    public endAngle?: number;
    public datalabel?: Object;
    public legendSettings?: Object;
    ngOnInit(): void {
        this.startAngle = 270;
        this.endAngle = 90;
        this.datalabel = { visible: true, name: 'text', position: 'Outside' };
        this.piedata = pieData;
         this.legendSettings = {
            visible: false
        };
    }

}


