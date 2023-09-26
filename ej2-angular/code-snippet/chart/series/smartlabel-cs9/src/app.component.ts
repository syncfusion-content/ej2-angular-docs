

import { Component, OnInit } from '@angular/core';
import { labelData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [enableSmartLabels]='enableSmartLabels'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public datalabel?: Object;
    public enableSmartLabels?: boolean;
    ngOnInit(): void {
        this.datalabel = { visible: true, name: 'text', position: 'Outside',
                         connectorStyle:{
                    //Length of the connector line in pixels
                    length: '50px',
                    //Width of the connector line in pixels
                    width: 2,
                    //dashArray of the connector line
                    dashArray: '5,3',
                    //Color of the connector line
                    color: '#f4429e',
                    //Specifies the type of the connector line either Line or Curve
                    type: 'Curve'
                } };
        this.enableSmartLabels = true;
        this.piedata = labelData;
    }

}


