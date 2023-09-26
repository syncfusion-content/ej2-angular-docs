

import { Component, OnInit } from '@angular/core';
import { piechart } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piechart' xName='x' yName='y'  legendShape='Circle'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piechart?: Object[];
    public legendSettings?: Object;
    ngOnInit(): void {
        this.legendSettings = {
          visible:true, position:'Right', textWrap:'Wrap',
          maximumLabelWidth:60, height:'44%', width:'64%'
        };
        this.piechart = piechart;
    }
}


