


import { Component, OnInit } from '@angular/core';
import { funnelData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series width='330px' type='Funnel' [dataSource]='funneldata' xName='x' yName='y'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public funneldata?: Object[];
    ngOnInit(): void {
        this.funneldata = funnelData;
    }

}



