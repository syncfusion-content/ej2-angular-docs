import { Component, OnInit } from '@angular/core';
import { GridModule, EditService, FormulaService, EditSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { productData } from './datasource';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GridModule],
    providers: [EditService, FormulaService],
    template: `
        <ejs-grid
            [dataSource]="data"
            [editSettings]="editSettings"
            [selectionSettings]="selectionSettings"
            [enableAutoFill]="true"
            height="272">
            <e-columns>
                <e-column
                    field="Id"
                    headerText="ID"
                    [isPrimaryKey]="true"
                    width="100"
                    [validationRules]="idRules">
                </e-column>

                <e-column
                    field="Product"
                    headerText="Product Name"
                    width="180"
                    [validationRules]="productNameRules">
                </e-column>

                <e-column
                    field="Quantity"
                    headerText="Quantity"
                    width="120"
                    textAlign="Right">
                </e-column>

                <e-column
                    field="Price"
                    headerText="Price Per Unit"
                    width="140"
                    textAlign="Right"
                    editType="numericedit"
                    format="C2">
                </e-column>

                <e-column
                    field="GrossAmount"
                    headerText="Gross Amount"
                    width="150"
                    textAlign="Right"
                    allowFormula="true"
                    format="C2">
                </e-column>

                <e-column
                    field="TaxAmount"
                    headerText="Tax Amount"
                    width="130"
                    textAlign="Right"
                    allowFormula="true"
                    format="C2">
                </e-column>

                <e-column
                    field="TotalAmount"
                    headerText="Total Amount"
                    width="150"
                    textAlign="Right"
                    allowFormula="true"
                    format="C2">
                </e-column>
            </e-columns>
        </ejs-grid>
    `
})
export class AppComponent implements OnInit {

    public data!: object[];
    public editSettings!: EditSettingsModel;
    public selectionSettings!: SelectionSettingsModel;

    public idRules!: Object;
    public productNameRules!: Object;

    ngOnInit(): void {
        this.data = productData;

        this.editSettings = {
            allowEditing: true,
            mode: 'Cell'
        };

        this.selectionSettings = {
            mode: 'Cell',
            cellSelectionMode: 'Box',
            type: 'Multiple'
        };

        this.idRules = {
            required: true
        };

        this.productNameRules = {
            required: true
        };
    }
}