import { stackedHeaderData } from './datasource';
import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ColumnChooserService, ColumnModel, GridComponent, GridModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TreeView, TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  imports: [GridModule, ButtonModule, TreeViewModule],
  providers: [PageService, ToolbarService, ColumnChooserService],
  standalone: true,
  selector: 'app-root',
  template: `
      <div class="control-section">
        <ejs-grid #grid [dataSource]="data" [showColumnChooser]='true' [allowMultiSorting]='true' [columnChooserSettings]='columnChooserSettings' [toolbar]='toolbar' height='267px'>
          <e-columns>
            <e-column field='CustomerID' headerText='Customer ID' width='160' height='250' textAlign="Right" minWidth=20  isPrimaryKey='true' [showInColumnChooser]='false'></e-column>
            <e-column field='CustomerName' headerText='Name' width='100'></e-column>
            <e-column headerText='Order Details' [columns]='orderColumns' textAlign="Center"></e-column>
            <e-column headerText='Shipping Details' [columns]='shipColumns' textAlign="Center"></e-column>
            <e-column headerText='Delivery Status' [columns]='deliveryColumns' textAlign="Center"></e-column>
          </e-columns>
          <ng-template #columnChooserSettingsTemplate let-data>
            <div id='treeparent'><ejs-treeview #treeview id='treeview' cssClass="no-border" [fields]='dataProcess(data)' (nodeClicked)='nodeCheck($event)' (keyPress)='nodeCheck($event)' [showCheckBox]='true' [enableRtl]='enableRTL'></ejs-treeview></div>
          </ng-template>
          <ng-template #columnChooserSettingsHeaderTemplate>
            <div>
              <span class="e-icons e-columns" id="column-chooser-icon"></span> 
              <span id="column-chooser-text">Column Options</span>
            </div>
          </ng-template>
          <ng-template #columnChooserSettingsFooterTemplate>
            <button #applyBtn (click)="columnChooserSubmit()" ejs-button>Apply</button>
            <button #closeBtn (click)="columnChooserClose()" ejs-button>Close</button>
          </ng-template>
        </ejs-grid>
      </div>`
})
export class AppComponent {
  @ViewChild('grid') public gridInstance: GridComponent | any;
  @ViewChild('treeview') public treeview: TreeView | any;
  public data: Object[] = [];
  public orderColumns?: ColumnModel[];
  public shipColumns?: ColumnModel[];
  public deliveryColumns?: ColumnModel[];
  public columnChooserSettings?: Object;
  public toolbar?: string[];
  public enableRTL?: boolean;

  public ngOnInit(): void {
    this.data = stackedHeaderData;
    this.toolbar = ['ColumnChooser'];
    this.columnChooserSettings = { enableSearching: true };
    this.orderColumns = [
      { field: 'OrderID', headerText: 'ID', textAlign: 'Right', width: 90 },
      { field: 'OrderDate', headerText: 'Date', textAlign: 'Right', width: 110, format: 'yMd' }
    ];
    this.shipColumns = [
      { field: 'ShipCountry', headerText: 'Country', textAlign: 'Left', width: 115 },
      { field: 'Freight', headerText: 'Charges', textAlign: 'Right', width: 130, format: 'C2' },
    ];
    this.deliveryColumns = [
      { field: 'Status', headerText: 'Status', textAlign: 'Center', width: 110 },
    ];
  }

  columnChooserSubmit() {
    const checkedElements: any = [];
    const uncheckedElements: any = [];
    var showColumns = this.gridInstance.getVisibleColumns().filter(function (column: any) { return (column.showInColumnChooser === true); });
    showColumns = showColumns.map(function (col: any) { return col.headerText; });
    const treeItems = document.querySelectorAll('.e-list-item');
    treeItems.forEach(item => {
      const itemDetails = this.treeview.getNode(item);
      if (!itemDetails.hasChildren) {
        if (item.getAttribute('aria-checked') === 'true') {
          checkedElements.push(itemDetails.text);
        } else {
          uncheckedElements.push(itemDetails.text);
        }
      }
    });
    showColumns = showColumns.filter((col: any) => !uncheckedElements.includes(col));
    checkedElements.forEach((item: any) => {
      if (!showColumns.includes(item)) {
        showColumns.push(item);
      }
    });
    var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
    this.gridInstance.columnChooserModule.changeColumnVisibility(columnsToUpdate);
  };

  columnChooserClose() {
    this.gridInstance.columnChooserModule.hideDialog();
  };

  dataProcess(args: any) {
    const parentNodes = [
      { id: 1, name: 'Customer Details', hasChild: true, expanded: true },
      { id: 2, name: 'Order Details', hasChild: true, expanded: true },
      { id: 3, name: 'Shipping Details', hasChild: true, expanded: true },
      { id: 4, name: 'Delivery Status', hasChild: true, expanded: true },
    ];
    let treeData = [];
    if (args.columns && args.columns.length) {
      treeData = args.columns.map((column: any) => {
        let parentId: number = 0;
        switch (column.field) {
          case 'CustomerID':
          case 'CustomerName':
            parentId = 1;
            break;
          case 'OrderID':
          case 'OrderDate':
            parentId = 2;
            break;
          case 'ShipCountry':
          case 'Freight':
            parentId = 3;
            break;
          case 'Status':
            parentId = 4;
            break;
          default:
            break;
        }
        return {
          id: column.uid,
          name: column.headerText,
          pid: parentId,
          isChecked: column.visible
        };
      });
      const uniquePids: string[] = [];
      treeData.forEach((item: any) => {
        if (!uniquePids.includes(item.pid)) {
          uniquePids.push(item.pid);
        }
      });
      const filteredParents = parentNodes.filter((parent: any) => uniquePids.includes(parent.id));
      treeData.unshift(...filteredParents);
    } else {
      treeData = [];
    }
    this.enableRTL = this.gridInstance && this.gridInstance.enableRtl ? true : false;
    const fields = { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
    return fields;
  };

  nodeCheck(args: any) {
    let checkedNode = [args.node];
    if (args.event.target.classList.contains('e-fullrow') || args.event.key === "Enter") {
      let getNodeDetails = this.treeview.getNode(args.node);
      if (getNodeDetails.isChecked === 'true') {
        this.treeview.uncheckAll(checkedNode);
      } else {
        this.treeview.checkAll(checkedNode);
      }
    }
  }
}
