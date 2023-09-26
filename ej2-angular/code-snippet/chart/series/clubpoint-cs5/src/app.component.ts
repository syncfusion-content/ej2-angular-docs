

import { Component, OnInit } from '@angular/core';
import { IAccTextRenderEventArgs, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { groupData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" (textRender)="onTextRender($event)" (pointRender)="onPointRender($event)">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' groupTo='11' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public datalabel?: Object;
    public onTextRender: Function | any;;
    public onPointRender: Function | any;;
    ngOnInit(): void {
        this.datalabel = { visible: true, name: 'text', position: 'Outside' };
        this.onTextRender = (args: IAccTextRenderEventArgs) => {
            if (args.text.indexOf('Others') > -1) {
                args.color = 'red';
                args.border.width = 1;
            }
        }
        this.onPointRender = (args: IAccPointRenderEventArgs) => {
            if ((args.point.x as string).indexOf('Others') > -1) {
                args.fill = '#D3D3D3';
            }
        }
        this.piedata = groupData;
    }

}


