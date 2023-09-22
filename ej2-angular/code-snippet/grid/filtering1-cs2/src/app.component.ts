

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, IFilterUI, Column } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs, DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid='' [dataSource]='data' [allowFiltering]='true' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='EmployeeID' headerText='Employee ID' width=120 [filterBarTemplate]='templateOptions'></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public templateOptions?: IFilterUI;

    @ViewChild('grid')
    public gridObj?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.templateOptions = {
            create: (args: { element: Element, column: Column }) => {
                const dd = document.createElement('input');
                dd.id = 'EmployeeID';
                return dd;
            },
            write: (args: { element: Element, column: Column }) => {
                 let DropDownListObj: DropDownList = new DropDownList({
                    dataSource: ['All','1','3','4','5','6','8','9'],
                    fields: { text: 'EmployeeID', value: 'EmployeeID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px',
                    change: function(e: any){
                        var gridObj = (document.getElementsByClassName('e-grid')[0] as any).ej2_instances[0];
                        if(e.value =='All') {
                            gridObj.removeFilteredColsByField('EmployeeID');
                        } else {
                            gridObj.filterByColumn('EmployeeID','equal',parseInt(e.value as any));
                        }
                    }
                 });
                DropDownListObj.appendTo('#EmployeeID');
            },
        };
    }
}



