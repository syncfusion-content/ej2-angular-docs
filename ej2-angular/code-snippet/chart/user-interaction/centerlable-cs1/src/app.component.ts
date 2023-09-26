

import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-container',
    template:
        `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings' [centerLabel]='centerLabel'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='centerLabelData' xName='x' yName='y' innerRadius='65%'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public legendSettings?: Object;
    public centerLabel?: Object;
    public centerLabelData: Object = [
        { x: 'Chrome', y: 61.3, text: 'Chrome: 61.3%' },
        { x: 'Safari', y: 24.6, text: 'Safari: 24.6%' },
        { x: 'Edge', y: 5.0, text: 'Edge: 5.00%' },
        { x: 'Samsung Internet', y: 2.7, text: 'Samsung Internet: 2.7%' },
        { x: 'Firefox', y: 2.6, text: 'Firefox: 2.6%' },
        { x: 'Others', y: 3.6, text: 'Others: 3.6%' }
    ];
    ngOnInit(): void {
        this.legendSettings = {
            visible: false
        };
        this.centerLabel = {
            text: 'Mobile<br>Browsers<br>Statistics'
        }
    }
}


