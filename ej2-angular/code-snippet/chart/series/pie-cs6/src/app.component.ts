

import { Component, OnInit } from '@angular/core';
import { dataMapping } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public datalabel?: Object;
    ngOnInit(): void {
        this.piedata = dataMapping;
        this.datalabel = { visible: true, name: 'text', position: 'Outside' };
    }

}


