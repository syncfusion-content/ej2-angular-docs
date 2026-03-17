import { data, fEmployeeData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeEventArgs, DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService, ForeignKeyService, GridComponent, GridModule, IFilterCreate, IFilterUI, IFilterWrite } from '@syncfusion/ej2-angular-grids';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
    imports: [ GridModule ],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='260' [allowFiltering]='true'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData' [filterBarTemplate]='filter'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService, FilterService]
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('grid')
    public grid?: GridComponent;
    public employeeData?: object[];
    public filter: IFilterUI = {
        create: (args: IFilterCreate): HTMLElement => {
              return createElement('input', { className: 'flm-input' });
        },
        write: (args: IFilterWrite): void => {
            fEmployeeData.splice(0, 0, { FirstName: 'All' }); // for clear filtering
            const dropInstance: DropDownList = new DropDownList({
                dataSource: new DataManager(fEmployeeData),
                fields: { text: 'FirstName' },
                placeholder: 'Select a value',
                popupHeight: '200px',
                index: 0,
                change: (e: ChangeEventArgs) => {
                    if (e.value !== 'All' && e.value != null) {
                        const filterValue: string = String(e.value);
                        (this.grid as GridComponent).filterByColumn('EmployeeID', 'equal', filterValue);
                    } else {
                        (this.grid as GridComponent).removeFilteredColsByField('EmployeeID');
                    }
                }
            });
            dropInstance.appendTo((args as any).element as HTMLTableCellElement);
        }
    };
    ngOnInit(): void {
        this.data = data;
        this.employeeData = fEmployeeData;
    }
}