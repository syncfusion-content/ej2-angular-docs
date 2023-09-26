

import { Component, OnInit } from '@angular/core';
import { IAccTooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [tooltip]='tooltip' [title]='title' (tooltipRender)='tooltipRender($event)'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [dataLabel]='datalabel' radius="70%"></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public datalabel?: Object;
    public tooltip?: Object;
    public title?: String;
    public tooltipRender(args: IAccTooltipRenderEventArgs): void {
           let value  = args.point.y / args.series.sumOfPoints * 100;
           args["text"] = args.point.x + ' : ' + Math.ceil(value) + '' + '%';
        };
    ngOnInit(): void {
        this.datalabel = { visible: true };
        this.tooltip = {enable: true};
        this.title = 'Mobile Browser Statistics';
        this.piedata = [
                    { 'x': 'Chrome', y: 37 }, { 'x': 'UC Browser', y: 17 },
                    { 'x': 'iPhone', y: 19 }, { 'x': 'Others', y: 4 }, { 'x': 'Opera', y: 11 }
                ];
    }

}


