

import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';
import { IAccTextRenderEventArgs, IAccTooltipRenderEventArgs } from '@syncfusion/ej2-charts';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [tooltip]='tooltip'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' tooltipMappingName='text'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public tooltip?: Object;
    ngOnInit(): void {
        this.piedata = [{ x: 'Jan', y: 13, text: 'Jan: 13' }, { x: 'Feb', y: 13, text: 'Feb: 13' },
                        { x: 'Mar', y: 17, text: 'Mar: 17' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }
         ];
         this.tooltip = {
              enable: true, format: '${point.tooltip}'
                }
               };
    }


