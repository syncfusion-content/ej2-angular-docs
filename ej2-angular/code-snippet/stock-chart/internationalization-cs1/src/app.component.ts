

import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { chartData } from './datasource';
import { setCurrencyCode, L10n, setCulture  } from '@syncfusion/ej2-base';
import { ITooltipRenderEventArgs } from '@syncfusion/ej2-angular-charts';
setCurrencyCode("EUR");

@Component({
    selector: 'app-container',
    template:
        `<ejs-stockchart id='chart-container' [primaryXAxis]='primaryXAxis' style="display:block;"
        [primaryYAxis]='primaryYAxis' [crosshair]='crosshair' (tooltipRender)='tooltipRender($event)' [tooltip]='tooltip'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='data1' type='Candle' xName='x' yName='high' high='high' low='low'>
            </e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})

export class AppComponent implements OnInit {

    public data1: Object[] = chartData;

    public primaryXAxis: Object = { majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true } };

    public primaryYAxis: Object = {
        lineStyle: { color: 'transparent' },
        majorTickLines: { color: 'transparent', width: 0 },
        labelFormat: 'c',
        crosshairTooltip: { enable: true }
    };
    public crosshair: Object = {
        enable: true
    };
    public tooltipRender(args: ITooltipRenderEventArgs | any): void {
        if (args.text.split('<br/>')[4]) {
        let target: number = parseInt(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], 10);
        let value: string = (target / 100000000).toFixed(1) + 'B';
        args.text = args.text.replace(args.text.split('<br/>')[4].split('<b>')[1].split('</b>')[0], value);
        }
    };

    public tooltip: object = { enable: true };
    constructor() {
        //code
    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}


