import { productDatas } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { EditService, EditSettingsModel, GridComponent, GridModule, PageService, SortService, ToolbarItems, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
        GridModule,
        DatePickerAllModule,
        FormsModule,
        TimePickerModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule
    ],
    providers: [EditService, ToolbarService, SortService, PageService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid  #grid id="grid" [dataSource]='data' [allowPaging]="true" [editSettings]='editSettings' [toolbar]='toolbar' (created)="created()">
                    <e-columns>
                        <e-column field="ProductID" headerText="Product ID" width="120" textAlign="Right" isPrimaryKey="true" [validationRules]="{ required: true }"></e-column>
                        <e-column field="ProductCategory" headerText="Product Category" width="140" [validationRules]="{ required: true }"></e-column>
                        <e-column field="ShippingMethod" headerText="Shipping Method" width="140" editType="dropdownedit"></e-column>
                        <e-column field="StockQuantity" headerText="StockQuantity" width="150" editType="numericedit" format="N0"></e-column>
                        <e-column field="Discount" headerText="Discount (%)" width="170" editType="numericedit" format="C2"></e-column>
                        <e-column field="Revenue" headerText="Revenue" width="170" editType="numericedit" format="C2"></e-column>
                        <e-column field="TransactionDate" headerText="TransactionDate" width="170" editType="datetimepickeredit" format="yMd"></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = productDatas;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' },
        this.toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
    }
    created = () => {
        (this.grid as GridComponent).getContentTable().addEventListener('click', (args) => {
            if ((args.target as HTMLElement).classList.contains('e-rowcell')) {
                (this.grid as GridComponent).editModule.editCell(args.target.closest('tr').rowIndex,
                    (this.grid as GridComponent).getColumnByIndex(parseInt((args.target as HTMLElement).getAttribute('aria-colindex') as string) - 1).field);
            }
        });
    };
}
