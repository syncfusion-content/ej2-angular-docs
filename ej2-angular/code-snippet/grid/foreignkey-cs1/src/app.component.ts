import { data, employeeData } from './datasource';
import { Component, OnInit } from '@angular/core';
import { AutoComplete } from '@syncfusion/ej2-angular-dropdowns';
import { Column, EditService, EditSettingsModel, ForeignKeyService, GridModule, IEditCell, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';

@Component({
    imports: [GridModule ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='270' [editSettings]='editoption' [toolbar]='toolbar'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData' [edit]='edit'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService, EditService, ToolbarService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    public employeeData?: ForeignKeyDataType[];
    public editoption: EditSettingsModel = { allowEditing: true };
    public autoComplete?: AutoComplete;
    toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    public edit: IEditCell = {
        create: () => { // to create input element
            return createElement('input');
        },
        read: () => { // return edited value to update data source

            const EmployeeID = 'EmployeeID';
            const acValue = (this.autoComplete as AutoComplete).value as string | number | boolean | Date | null | undefined;
            const value = new DataManager(this.employeeData as ForeignKeyDataType[]).executeLocal(new Query().where('FirstName', 'equal', acValue));
            return value.length ? (value[0] as ForeignKeyDataType)[EmployeeID] : null; // to convert foreign key value to local value.
        },
        destroy: () => { // to destroy the custom component.
            (this.autoComplete as AutoComplete).destroy();
        },
        write: (args: {
            rowData: object, column: Column, foreignKeyData: ForeignKeyDataType[],
            element: HTMLTableCellElement
        }) => {
            this.autoComplete = new AutoComplete({
                dataSource: this.employeeData as unknown as { [key: string]: Object }[],
                fields: { value: args.column.foreignKeyValue },
                value: args.foreignKeyData[0].FirstName
            });
            this.autoComplete.appendTo(args.element as HTMLTableCellElement);
        }
    }

    ngOnInit(): void {
        this.data = data;
        this.employeeData = employeeData as ForeignKeyDataType[];
    }
}
interface ForeignKeyDataType{
    EmployeeID:number,
    FirstName:string,
    LastName:string
}
