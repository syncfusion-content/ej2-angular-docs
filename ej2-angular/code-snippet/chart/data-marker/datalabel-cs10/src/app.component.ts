

import { Component, ViewEncapsulation } from '@angular/core';
import {
    ISeriesRenderEventArgs,
    ITextRenderEventArgs,
} from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

let total: any = [];

/**
 * Sample for Column Series
 */
@Component({
    selector: 'app-container',
    template: `<div class="control-section">
    <div align='center'>
        <ejs-chart style='display:block;' [chartArea]='chartArea' [width]='width' align='center' id='chartcontainer' [primaryXAxis]='primaryXAxis'
            [primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip' (seriesRender)='seriesRender($event)' (textRender)='textRender($event)'>
            <e-series-collection>
                <e-series [dataSource]='data' type='Column' xName='x' yName='y' name='Gold' width=2 [marker]='marker'> </e-series>
                <e-series [dataSource]='data1' type='Column' xName='x' yName='y' name='Silver' width=2 [marker]='marker'> </e-series>
                <e-series [dataSource]='data2' type='Column' xName='x' yName='y' name='Bronze' width=2 [marker]='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
    <div style="float: right; margin-right: 10px; margin-top: -5px">Source:
        <a href="https://www.gov.uk/" target='_blank'>www.gov.uk</a>
    </div>
</div>`,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    public data: Object[] = [
        { x: 'USA', y: 46 },
        { x: 'GBR', y: 27 },
        { x: 'CHN', y: 26 },
    ];
    public data1: Object[] = [
        { x: 'USA', y: 37 },
        { x: 'GBR', y: 23 },
        { x: 'CHN', y: 18 },
    ];
    public data2: Object[] = [
        { x: 'USA', y: 38 },
        { x: 'GBR', y: 17 },
        { x: 'CHN', y: 26 },
    ];
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { color: 'transparent' },
    };
    public marker: Object = {
        dataLabel: {
            visible: true,
            position: 'Top',
            font: { fontWeight: '600', color: '#ffffff' },
        },
    };
    public title: string = 'Olympic Medal Counts - RIO';
    public tooltip: Object = {
        enable: true,
    };
    // custom code start
    public seriesRender(args: ISeriesRenderEventArgs | any): void {
        for (let i = 0; i < args.data.length; i++) {
            if (!total[args.data[i].x]) total[args.data[i].x] = 0;
            total[args.data[i].x] += parseInt(args.data[i].y);
        }
    }
    public textRender(args: ITextRenderEventArgs | any): void {
        let percentage: number | string = (parseInt(args.text) / total[args.point.x]) * 100;
        percentage = percentage % 1 === 0 ? percentage : percentage.toFixed(2);
        args.text = percentage + '%';
    }
    // custom code end
    public chartArea: Object = {
        border: {
            width: 0,
        },
    };
    public width: string = Browser.isDevice ? '100%' : '60%';

    constructor() {
        //code
    }
}



