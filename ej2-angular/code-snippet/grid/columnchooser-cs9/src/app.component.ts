import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { ColumnChooserService, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GridModule],
    providers: [ToolbarService, ColumnChooserService],
    template: `<ejs-grid [dataSource]="data" [toolbar]="['ColumnChooser']" [showColumnChooser]="true" [columnChooserSettings]="columnChooserSettings" height="235">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" [showInColumnChooser]="false"></e-column>
        <e-column field="CustomerName" headerText="Customer Name" width="150"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShippedDate" headerText="Shipped Date" width="140" format="yMd" textAlign="Right"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: any[] = [];
    public columnChooserSettings: object = { mode: 'Immediate' };

    ngOnInit(): void {
        this.data = data;
    }
}
