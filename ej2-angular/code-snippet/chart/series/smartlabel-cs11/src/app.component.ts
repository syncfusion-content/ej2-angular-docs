

import { Component, OnInit } from '@angular/core';
import { labelData } from './datasource';
import { IAccTextRenderEventArgs } from '@syncfusion/ej2-angular-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" (textRender)="onTextRender($event)">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public datalabel?: Object;
    onTextRender: Function | any;
    ngOnInit(): void {
        this.datalabel = { visible: true };
        this.piedata = labelData;

        this.onTextRender = (args: IAccTextRenderEventArgs) => {
            args.text = args.point.percentage + "%";
        }
    }

}


