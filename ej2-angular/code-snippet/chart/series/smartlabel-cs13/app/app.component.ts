

import { Component, OnInit } from '@angular/core';
import { labelData } from 'datasource.ts';
import { IAccTextRenderEventArgs } from '@syncfusion/ej2-charts';
@Component({
    selector: 'app-container',
    template:
    `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata: Object[];
    public datalabel: Object;
    ngOnInit(): void {
        this.datalabel = { visible: true, position: 'Inside' ,maxWidth:100,textWrap:'Wrap',name: 'text' };
        this.piedata = labelData;
    }

}


