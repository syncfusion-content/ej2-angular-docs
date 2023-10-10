

import { Component, OnInit ,ViewChild} from '@angular/core';
import { data } from './datasource';
import { createElement } from '@syncfusion/ej2-base';
import { GridComponent,PrintEventArgs,ToolbarItems, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [allowPaging]='true'
               [pageSettings]='pageOptions' [selectionSettings]="selectionSettings" (beforePrint)='beforePrint($event)' [toolbar]='toolbarOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    @ViewChild('grid', {static: true})
    public grid?: GridComponent;
    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    public pageOptions?: PageSettingsModel;
    public selectionSettings?:any;

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Print'];
        this.pageOptions = { pageSize: 6 };
        this.selectionSettings={ type: 'Multiple'}
    }
    beforePrint(args: any): void{
        var rows = this.grid?.getSelectedRows();
        if (rows && rows.length) {
            this.data= rows;
        }
      }
}