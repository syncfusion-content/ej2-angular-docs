import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionEventArgs, ColumnChooserService, GridComponent, GridModule, PageService, ResizeService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule],
  providers: [ResizeService, ToolbarService, ColumnChooserService,PageService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-grid #grid [dataSource]="data" height="245px" [allowPaging]="true"
    [toolbar]="toolbarItems" (actionComplete)="onActionComplete($event)" [showColumnChooser]= 'true'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
      </e-columns>
    </ejs-grid>
`
})
export class AppComponent implements OnInit {
  public data?: object[];
  @ViewChild('grid')
  public grid?: GridComponent;
  public toolbarItems?: ToolbarItems[];
  ngOnInit(): void {
    this.data = data;
    this.toolbarItems = ['ColumnChooser'];
  }

  public onActionComplete({ requestType }: ActionEventArgs): void {
    if (requestType === 'columnstate') {
      (this.grid as GridComponent).autoFitColumns();
    }
  }
}
