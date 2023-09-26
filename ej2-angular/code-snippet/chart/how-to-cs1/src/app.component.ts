

import { Component, OnInit } from '@angular/core';
import { IAccTooltipRenderEventArgs, IPointEventArgs } from '@syncfusion/ej2-angular-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [tooltip]='tooltip' [title]='title' (pointClick)='pointClick($event)'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [dataLabel]='datalabel' radius="70%"></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>
     <label id="lbl"></label>  `
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public datalabel?: Object;
    public tooltip?: Object;
    public title?: String;
    public pointClick(args: IPointEventArgs): void {
        (document.getElementById("lbl") as HTMLElement ).innerText = "X : "+ args.point.x + "\nY : "+ args.point.y;
    };
    ngOnInit(): void {
        this.datalabel = { visible: true };
        this.tooltip = {enable: true};
        this.title = 'Mobile Browser Statistics';
        this.piedata = [
                   { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
                    { 'x': 'iPhone', y: 19, text: '19%' },
                    { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
                    { 'x': 'Android', y: 12, text: '12%' }
                ];
    }

}


