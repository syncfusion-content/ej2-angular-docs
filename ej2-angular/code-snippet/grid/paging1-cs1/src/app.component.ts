import { data } from './datasource';
import { arAELocalization } from './locale.json';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs, ButtonModule, CheckBoxModule, RadioButtonModule,SwitchModule, } from '@syncfusion/ej2-angular-buttons';
import { ColumnChooserService, ColumnMenuService, EditService, EditSettingsModel, FilterService, GridComponent, GridModule, GroupService, PageService, PageSettingsModel, ReorderService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { L10n } from '@syncfusion/ej2-base';

L10n.load(arAELocalization);

@Component({
    imports: [ GridModule, ButtonModule,CheckBoxModule,RadioButtonModule,SwitchModule],
    providers: [ PageService, ToolbarService, EditService, GroupService, FilterService, SortService, ReorderService, ColumnMenuService, ColumnChooserService],
    standalone: true,
    selector: 'app-root',
    template: `
    <div>
      <label style="padding: 10px 10px"> Enable or diable RTL mode</label>
      <ejs-switch id="switch" (change)="onSwitchChange($event)"></ejs-switch>
    </div>
    <ejs-grid #grid [dataSource]='data' [allowSorting]='true' [allowReordering]='true' 
    [allowFiltering]='true' [allowGrouping]='true' [editSettings]="editSettings" [toolbar]="toolbar" 
    [enableRtl]='true' [locale]='locale' [allowPaging]='true' [pageSettings]='pageOptions'
    [showColumnMenu]='true' [showColumnChooser]='true'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=90></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public pageOptions?: PageSettingsModel;
    public locale: any = 'ar-AE';
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.pageOptions = { pageSize: 7 };
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode:'Normal' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }

    onSwitchChange(args: ChangeEventArgs) {
        if (args.checked) {
          (this.grid as GridComponent).enableRtl = false;
        } else {
          (this.grid as GridComponent).enableRtl = true;
        }
      }
}
