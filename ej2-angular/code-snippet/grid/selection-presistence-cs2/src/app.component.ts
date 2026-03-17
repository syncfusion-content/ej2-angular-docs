import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { EditService, FilterService, GridModule, PageService, PageSettingsModel, SelectionSettingsModel, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule ],
    providers: [EditService, ToolbarService, PageService, FilterService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowPaging]='true' height='290px' 
               [selectionSettings]='selectionOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' 
                    textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public selectionOptions?: SelectionSettingsModel;
    public pageOptions?: PageSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { type: 'Multiple', mode: 'Both', persistSelection: true, allowColumnSelection: true };
        this.pageOptions = { pageSize: 5 };

    }
}
