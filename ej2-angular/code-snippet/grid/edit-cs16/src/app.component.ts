import { Component, OnInit, ViewChild } from '@angular/core';
import {Column, EditSettingsModel, PageSettingsModel, ToolbarItems, IEditCell, GridComponent} from '@syncfusion/ej2-angular-grids';
import {EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-grids';
import {RichTextEditor, Toolbar as RTEToolbar, Image, Link, HtmlEditor, Table, QuickToolbar, NodeSelection} from '@syncfusion/ej2-richtexteditor';
import { data } from './datasource';

RichTextEditor.Inject(RTEToolbar, Link, Image, HtmlEditor, QuickToolbar);

@Component({
  selector: 'app-root',
  template: `<ejs-grid #normalgrid id="Normalgrid" [dataSource]="data" allowPaging="true" [pageSettings]="pageSettings" [editSettings]="editSettings" [toolbar]="toolbar" (created)="created($event)">
    <e-columns>
    <e-column field="OrderID" headerText="Order ID" width="100" textAlign="Right" isPrimaryKey="true" [validationRules]="orderidrules"></e-column>
    <e-column field="CustomerID" headerText="Customer ID" width="100"></e-column><e-column field="Freight" headerText="Freight" width="100" format="C2" textAlign="Right" editType="numericedit" [validationRules]="freightrules"></e-column>
    <e-column field="OrderDate" headerText="Order Date" width="100" editType="datetimepickeredit" [format]="formatoptions" textAlign="Right"></e-column>
    <e-column field="ShipAddress" headerText="Ship Address " width="150" [edit]="editParams" [disableHtmlEncode]="disableHtmlEncode" [valueAccessor]="valueAccessor" allowTextWrap="true"></e-column>
    </e-columns>
    </ejs-grid>`,
  providers: [ToolbarService, EditService, PageService],
})

export class AppComponent implements OnInit {
  public data?: object[];
  @ViewChild('normalgrid') public grid?: GridComponent;
  public editSettings?: EditSettingsModel;
  public pageOptions?: PageSettingsModel;
  public toolbar?: ToolbarItems[];
  public formatOptions?: object[];
  public orderidrules?: Object;
  public customeridrules?: Object;
  public freightrules?: Object;
  public editParams?: IEditCell;
  public disableHtmlEncode?: boolean;
  public richTextEditor?: RichTextEditor;
  public rteElement?: HTMLElement;
  public formatoptions?: Object;
  public createShipAddressFn = () => {
    (this as any).rteElement = document.createElement('textarea');
    return (this as any).rteElement;
  };
  public readShipAddressFn = () => {
    return this.richTextEditor?.value;
  };
  public writeShipAddressFn = (args: any) => {
    this.richTextEditor = new RichTextEditor({
      value: (args as any).rowData[(args as any).column.field],
    });
    this.richTextEditor?.appendTo((this as any).rteElement);
  };
  public destroyShipAddressFn = () => {
    this.richTextEditor?.destroy();
  };
  public valueAccessor = (field: string, sdata: object, column: object) => {
    var value = (sdata as any)[field as string];
    if (value != undefined) {
      return value.split('\n').join('<br>');
    } else {
      return '';
    }
  };
  public pageSettings?: any;
  ngOnInit(): void {
    this.data = data;
    (this as any).editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    (this as any).pageOptions = { pageSizes: true, pageSize: 8 };
    (this as any).disableHtmlEncode = false;
    (this as any).orderidrules = { required: true, number: true };
    (this as any).customeridrules = { required: true };
    (this as any).freightrules = { required: true };
    (this as any).formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
    this.editParams = {
      create: this.createShipAddressFn,
      read: this.readShipAddressFn,
      write: this.writeShipAddressFn,
      destroy: this.destroyShipAddressFn,
    };
  }
  created = (args: any) => {
    (this.grid as any).keyConfigs.enter = '';
  };
}