import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [tooltip]='tooltip' highlightColor="red" [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata: Object[] = [];
     public tooltip?: Object;
     public legendSettings?: Object;
    ngOnInit(): void {
        this.piedata = pieData;
        this.tooltip = {
              enable: true };
              this.legendSettings = { visible: false}
        };
    }