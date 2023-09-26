


import { Component, OnInit } from '@angular/core';
import { funnelData } from './datasource';
import { IAccTextRenderEventArgs, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" (pointRender)="onPointRender($event)">
        <e-accumulation-series-collection>
            <e-accumulation-series  type='Funnel' [dataSource]='funneldata' xName='x' yName='y' [dataLabel]='datalabel' [gapRatio]="gapRatio"
             ></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public funneldata?: Object[];
    public gapRatio: number = 0.08;
    public onPointRender: Function | any;
    datalabel: any;
    ngOnInit(): void {
        this.onPointRender = (args: IAccPointRenderEventArgs) => {
            if ((args.point.x as string).indexOf('Downloaded') > -1) {
                args.fill = '#D3D3D3';
            }
            else {
            args.fill = '#597cf9';
        }
        }
        this.funneldata = funnelData;
    }

}



