

import { Component, OnInit } from '@angular/core';
import { labelData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [enableSmartLabels]='enableSmartLabels'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public datalabel?: Object;
    public enableSmartLabels?: boolean;
    ngOnInit(): void {
        this.datalabel = { visible: true, name: 'text', position: 'Outside', template: '<div>${point.x}</div><div>${point.y}</div>' };
        this.enableSmartLabels = true;
        this.piedata = labelData;
    }

}


