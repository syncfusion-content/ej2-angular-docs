

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #Grid [dataSource]='data' (click)='click($event)' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('Grid') public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Batch' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    click(event: any) {
        if ((event.target as any).classList.contains('e-rowcell')) {
            const index: number = parseInt((event.target as any).getAttribute('Index'), 10);
            const colindex: number = parseInt((event.target as any).getAttribute('aria-colindex'), 10);
            const field: string = (this.grid as any).getColumns()[colindex].field;
            (this.grid as any).editModule.editCell(index, field);
        }
    }
}



