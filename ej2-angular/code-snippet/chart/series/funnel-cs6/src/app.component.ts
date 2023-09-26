

import { Component, OnInit } from '@angular/core';
import { funnelDataSource } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]="legendSettings" [tooltip]="tooltip" title="Top population countries in the world 2017">
        <e-accumulation-series-collection>
            <e-accumulation-series  type='Funnel' [dataSource]='funnelData' xName='x' yName='y' neckWidth='15%'
            neckHeight='18%' [dataLabel]='dataLabel' name="2017 Population" explode="false"></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public funnelData?: Object[];
    public dataLabel?: Object;
    public legendSettings?: Object;
    public tooltip?: Object;
    ngOnInit(): void {
        this.funnelData = funnelDataSource;
        this.dataLabel = {
            visible: true, position: 'Outside',
            connectorStyle: { length: '6%' }, name: 'text',
        };
        this.legendSettings = {visible: false};
        this.tooltip = {
            enable: true, format: '${point.x} : <b>${point.y}</b>'
        };
    }
}



