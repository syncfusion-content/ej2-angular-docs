import { data } from './datasource';
import { Component } from '@angular/core';
import { EditService, FilterService, GridModule, PageService, SelectionSettingsModel, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule],
    providers: [EditService, ToolbarService, PageService, FilterService],
    standalone: true,
    selector: 'app-root',
    template: `   
        <ejs-grid #grid [dataSource]="data" allowPaging="true" 
        [selectionSettings]="selectionOptions">
            <e-columns>
                <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right">
                </e-column>
                <e-column field="CustomerID" headerText="Customer Name" width="150">
                </e-column>
                <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" 
                textAlign="Right"></e-column>
                <e-column field="Freight" headerText="Freight" width="120" format="C2" 
                textAlign="Right"></e-column>
                <e-column field="ShippedDate" headerText="Shipped Date" width="130" 
                format="yMd" textAlign="Right"></e-column>
                <e-column field="ShipCountry" headerText="Ship Country" width="150">
                </e-column>
            </e-columns>
        </ejs-grid>`
})

export class AppComponent {

    public data?: Object[];
    public selectionOptions?: SelectionSettingsModel;

    public ngOnInit(): void {
        this.data = data;
        this.selectionOptions = { mode: 'Cell', type: 'Single' };
    }
}