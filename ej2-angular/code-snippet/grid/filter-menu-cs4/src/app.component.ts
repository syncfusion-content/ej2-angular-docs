import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, FilterService, PageService} from '@syncfusion/ej2-angular-grids'
import { MultiSelectModule, CheckBoxSelectionService,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        MultiSelectModule,
        DropDownListAllModule,
        CheckBoxModule
    ],

providers: [FilterService, PageService,CheckBoxSelectionService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [allowFiltering]='true' [filterSettings]='filterOptions' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' format='yMd' width=100></e-column>
                    <e-column field='Verified' headerText='Verified' [displayAsCheckBox]= 'true' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
           type: 'Menu',
           operators: {
            stringOperator: [
                { value: 'startsWith', text: 'Starts With' },
                { value: 'endsWith', text: 'Ends With' },
                { value: 'contains', text: 'Contains' },
                { value: 'equal', text: 'Equal' },
                { value: 'notEqual', text: 'Not Equal' }
              ],
              numberOperator: [
                { value: 'equal', text: 'Equal' },
                { value: 'notEqual', text: 'Not Equal' },
                { value: 'greaterThan', text: 'Greater Than' },
                { value: 'lessThan', text: 'Less Than' }
              ],
              dateOperator: [
                { value: 'equal', text: 'Equal' },
                { value: 'notEqual', text: 'Not Equal' },
                { value: 'greaterThan', text: 'After' },
                { value: 'lessThan', text: 'Before' }
              ],
              booleanOperator: [
                { value: 'equal', text: 'Equal' },
                { value: 'notEqual', text: 'Not Equal' }
              ]
            }
        };
    }
}