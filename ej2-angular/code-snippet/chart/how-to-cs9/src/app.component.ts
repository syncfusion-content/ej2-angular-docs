

import { Component, OnInit } from '@angular/core';
import { ITooltipRenderEventArgs, Series } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [title]='title'
     [tooltip]='tooltip' selectionMode='Series'  (tooltipRender)='tooltipRender($event)'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='Max Temp' width=2 [marker]='marker'></e-series>
               <e-series [dataSource]='chartData1' type='Line' xName='x' yName='y' name='Max Temp' width=2 [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public marker?: Object;
    public primaryYAxis?: Object;
    public chartData1: Object[] = [
        { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
        { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
        { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 },
        { x: new Date(2011, 0, 1), y: 84 }
    ];
    public tooltip: Object = {
        enable: true
    };
    public tooltipRender(args: ITooltipRenderEventArgs): void {
       let series: Series = <Series>(args.series);
       if (series.seriesElement.classList[0] === 'chart-container_ej2_deselected') {
          args.cancel = true;
       }
    };
    ngOnInit(): void {
        this.chartData =[
        { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
        { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
        { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
        { x: new Date(2011, 0, 1), y: 70 }
                ];
        this.primaryXAxis = {
        valueType: 'DateTime',
        labelFormat: 'y',
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
        };
        this.primaryYAxis = {
        labelFormat: '{value}%',
        rangePadding: 'None',
        minimum: 0,
        maximum: 100,
        interval: 20,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
        };
        this.marker = {  visible: true,
        height: 10,
        width: 10 };
        this.title =  'NC Weather Report - 2016';
    }
}


