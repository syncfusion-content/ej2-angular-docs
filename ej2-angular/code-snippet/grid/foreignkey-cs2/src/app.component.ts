import { data, fEmployeeData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService, FilterSettingsModel, ForeignKeyService, GridComponent, GridModule, IFilter, IFilterCreate, IFilterRead, IFilterWrite } from '@syncfusion/ej2-angular-grids';
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
    imports: [ GridModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' [allowFiltering]='true'
        [filterSettings]='filteroption'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData' [filter]='filter'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
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
    public dropInstance?: DropDownList;
    public filteroption: FilterSettingsModel = { type: 'Menu'};
    public filter: IFilter = {
        ui: {
            create: (args: IFilterCreate): void => {
                const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                if (!args.target) { return; }
                args.target.appendChild(flValInput);
                this.dropInstance = new DropDownList({
                    dataSource: new DataManager(fEmployeeData),
                    fields: { text: 'FirstName', value: 'EmployeeID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px'
                });
                this.dropInstance.appendTo(flValInput);
            },
            write: (args: IFilterWrite): void => {
                (this.dropInstance as DropDownList).text = args.filteredValue as string || '';
            },
            read: (args: IFilterRead): void => {
                if (!args.column || !args.column.field) { return; }
                const field: string = args.column.field as string;
                const operator: string = args.operator ?? 'equal';
                const value: string = (this.dropInstance as DropDownList).text ?? '';
                (this.grid as GridComponent).filterByColumn(field, operator, value);
            }
        }
    };
    ngOnInit(): void {
        this.data = data;
        this.employeeData = fEmployeeData;
    }
}