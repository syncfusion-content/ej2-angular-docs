

import { Component, OnInit } from '@angular/core';
import { pyramidData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container">
        <e-accumulation-series-collection>
            <e-accumulation-series type='Pyramid' [dataSource]='pyramidData' xName='x' yName='y' [explode]='explode' [explodeAll]='explodeAll'
            [explodeIndex]='explodeIndex'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public pyramidData?: Object[];
    public explode?: boolean;
    public explodeIndex?: number;
    public explodeAll?: boolean;
    explodeOffset?: string;
    ngOnInit(): void {
        this.explode = true;
        this.explodeIndex = 3;
        this.explodeOffset = '30px';
        this.explodeAll = false;
        this.pyramidData = pyramidData;
    }

}



