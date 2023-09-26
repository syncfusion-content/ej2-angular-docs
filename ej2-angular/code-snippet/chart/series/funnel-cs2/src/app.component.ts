


import { Component, OnInit } from '@angular/core';
import { funnelData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series  width='60%'  height='80%' type='Funnel' [dataSource]='funneldata' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public funneldata?: Object[];
    datalabel?: Object;
    ngOnInit(): void {
        this.datalabel = { visible: true, name: 'text', position: 'Inside' };
        this.funneldata = funnelData;
    }

}



