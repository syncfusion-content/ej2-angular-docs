import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ForeignKeyService } from '@syncfusion/ej2-angular-grids'


import { Component, OnInit, ViewChild } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import { GridComponent, ForeignKeyService, FilterService, IFilterUI, Column } from '@syncfusion/ej2-angular-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { data, fEmployeeData } from './datasource';

@Component({
imports: [
        
        GridModule
    ],

providers: [ForeignKeyService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='260' [allowFiltering]='true'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData' [filterBarTemplate]='filter'></e-column>
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
    public filter: IFilterUI = {
        create: (args: { element: Element, column: Column }) => {
            return createElement('input', { className: 'flm-input' });
        },
        write: (args: { element: Element, column: Column }) => {
            fEmployeeData.splice(0, 0, {FirstName: 'All'}); // for clear filtering
            const dropInstance: DropDownList = new DropDownList({
                dataSource: new DataManager(fEmployeeData),
                fields: { text: 'FirstName' },
                placeholder: 'Select a value',
                popupHeight: '200px',
                index: 0,
                change: (e: any) => {
                    if (e.value !== 'All') {
                        (this.grid as any).filterByColumn('EmployeeID', 'equal', e.value);
                    } else {
                        (this.grid as any).removeFilteredColsByField('EmployeeID');
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



