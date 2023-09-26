

import { Component, OnInit } from '@angular/core';
import { labelData } from './datasource';
import { IAccTextRenderEventArgs } from '@syncfusion/ej2-charts';
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
    public onTextRender?: Function;
    ngOnInit(): void {
        this.datalabel = { visible: true };
        this.piedata = labelData;
        this.onTextRender = (args: IAccTextRenderEventArgs) => {
            if (args.text === '13.5') {
                args.color = 'red';
                args.border.width = 1;
            }
        }
    }

}


