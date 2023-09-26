


import { Component, OnInit } from '@angular/core';
import { funnelData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series type='Funnel' [dataSource]='funneldata' xName='x' yName='y' [dataLabel]='datalabel' [neckWidth]='neckWidth'
             [neckHeight]='neckHeight'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public funneldata?: Object[];
    public neckWidth: string = '25%';
    public neckHeight?:'5%'
    datalabel: any;
    ngOnInit(): void {
        this.funneldata = funnelData;
    }

}



