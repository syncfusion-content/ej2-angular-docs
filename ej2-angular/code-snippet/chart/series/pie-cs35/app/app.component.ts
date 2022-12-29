

import { Component, OnInit } from '@angular/core';
import { pieData } from 'datasource.ts';
import { IAccTextRenderEventArgs, IAccTooltipRenderEventArgs } from '@syncfusion/ej2-charts';
@Component({
    selector: 'app-container',
    template:
    `<ejs-accumulationchart id="chart-container" [tooltip]='tooltip', [highlightColor]='highlightColor'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata: Object[];
    public tooltip: Object;
    public highlighrColor: string = 'red'
    public ontooltipRender: Function;
    ngOnInit(): void {
        this.piedata = pieData;
         this.tooltip = {
              enable: true,
                format: '${series.name} ${point.x} : ${point.y}',
                fill: '#7bb4eb',
                border: {
                   width: 2,
                   color: 'grey'
                }
        };
    }


