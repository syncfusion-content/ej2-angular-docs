import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { ChangeEventArgs, CheckBoxSelectionService, DropDownListAllModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { FilterBarMode, FilterService, FilterSettingsModel, GridModule, PageService, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ 
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule,
        ButtonModule
        ],
    providers: [FilterService, PageService,CheckBoxSelectionService],
    standalone: true,
    selector: 'app-root',
    template: `<div class='input-container'>
			    <label for='fields' class='label'>Select Filter Mode</label>
			    <ejs-dropdownlist #field id='fields' [dataSource]='filterModesData' (change)='onModeChange($event)' [fields]="{ text: 'text', value: 'value' }"></ejs-dropdownlist>
               </div>
               <ejs-grid [dataSource]='data' allowPaging='true' [pageSettings]="pageSettings" [allowFiltering]='true' height='150px' [filterSettings]='filterSettings'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='OrderDate' headerText='Ship City' width=100 format='yMd'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterSettings!: FilterSettingsModel;
    public pageSettings: PageSettingsModel = { pageSize: 5 };
    public filterModesData: { text: string; value: FilterBarMode }[] = [
        { text: 'Immediate', value: 'Immediate' },
        { text: 'OnEnter', value: 'OnEnter' },
    ];

    ngOnInit(): void { 
        this.data = data;
    }
   onModeChange(args: ChangeEventArgs): void {
    const mode = (
      typeof args.value === 'string' ? args.value : 'Immediate'
    ) as FilterBarMode;
    this.filterSettings = { mode };
  }
}