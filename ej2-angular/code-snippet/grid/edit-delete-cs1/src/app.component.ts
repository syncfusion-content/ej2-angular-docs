import { data } from './datasource';
import { Component, ViewChild } from '@angular/core';
import { EditService, GridComponent, GridModule, PageService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs, Item } from '@syncfusion/ej2-angular-navigations';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
  'en-US': {
      grid: {
          'OKButton':'YES',
          'CancelButton':'Discard' ,
          'ConfirmDelete': 'Are you sure you want to delete the selected Record?' 
      }
  }
});
@Component({
  imports: [ GridModule],
  providers: [EditService, ToolbarService, SortService, PageService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-grid #grid [dataSource]="data" [editSettings]="editSettings" [toolbar]="toolbar" 
        (toolbarClick)="toolbarClick($event)" height='250px'>
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="120"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="130"></e-column>
      </e-columns>
    </ejs-grid>
  `,
})
export class AppComponent {

  @ViewChild('grid')
  public grid?: GridComponent;
  public data?: Object[];
  public editSettings?: Object;
  public toolbar?: Object;

  public ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      showDeleteConfirmDialog: true,
    };

    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  }
  toolbarClick(args: ClickEventArgs): void {
    if ((args.item as Item).text === 'Delete') {
        const dialogObj= ((this.grid as GridComponent).editModule as any).dialogObj   ;
        dialogObj.header = 'Delete Confirmation Dialog';
        dialogObj.showCloseIcon = true;    
    }
  }
}
