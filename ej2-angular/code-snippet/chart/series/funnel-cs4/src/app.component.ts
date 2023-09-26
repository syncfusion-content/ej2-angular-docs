

import { Component, OnInit } from '@angular/core';
import { funnelData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series  type='Funnel' [dataSource]='funneldata' xName='x' yName='y' [dataLabel]='datalabel' [gapRatio]="gapRatio"></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public funneldata?: Object[];
    public gapRatio: number = 0.08;
    datalabel: any;
    ngOnInit(): void {
        this.funneldata = funnelData;
    }

}



