

import { Component, OnInit, ViewChild } from '@angular/core';
import { TooltipComponent } from '@syncfusion/ej2-angular-popups';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `  <ejs-tooltip #tooltip target=".e-rowcell" (beforeRender)="beforeRender($event)">
                    <ejs-grid [dataSource]='data' [height]='315'>
                        <e-columns>
                            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                        </e-columns>
                    </ejs-grid>
                </ejs-tooltip>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('tooltip')
    public tooltip?: TooltipComponent;
    ngOnInit(): void {
        this.data = data;
    }
    beforeRender(args: any): void {
        if ((args as any).target.classList.contains('e-rowcell')) {
            (this.tooltip as any).content = 'This is value "' + (args as any).target.innerText + '" ';
        }
    }
}




