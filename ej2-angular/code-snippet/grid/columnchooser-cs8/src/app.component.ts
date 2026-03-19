import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnChooserService, GridComponent, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GridModule],
    providers: [ToolbarService, ColumnChooserService],
    template: `<ejs-grid #grid [dataSource]="data" [toolbar]="['ColumnChooser']" [showColumnChooser]="true" height="235" (beforeOpenColumnChooser)="onBeforeOpenColumnChooser($event)">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" isPrimaryKey="true" textAlign="Right"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150" textAlign="Left"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="Right"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150" [showInColumnChooser]="false"></e-column>
        <e-column field="ShipRegion" headerText="Ship Region" width="150" [visible]="false"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    // Show only specific columns in the column chooser.
    onBeforeOpenColumnChooser(args: any): void {
    args.selectedColumns = ['CustomerID', 'Freight', 'ShipCountry']; 
    }
}
