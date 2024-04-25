import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component, OnInit } from '@angular/core';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

@Component({
imports: [
        
        QueryBuilderModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder width="70%" [dataSource]="data" [rule]="importRules">
                <e-columns>
                  <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
                  <e-column field="FirstName" label="First Name" type="string"></e-column>
                  <e-column field="Country" label="Country" type="string"></e-column>
                  <e-column field="Designation" label="Designation" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>`
})

export class AppComponent implements OnInit {

    public data?: DataManager;
    importRules: { condition: string; rules: ({ label: string; field: string; type: string; operator: string; value: number; } | { label: string; field: string; type: string; operator: string; value: string; })[]; } | undefined;
values: any;
    ngOnInit(): void {
        this.data = new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/Employees/',
        adaptor: new ODataAdaptor(),
        });
        this.importRules = {
          'condition': 'and',
          'rules': [{
                'label': 'Employee ID',
                'field': 'EmployeeID',
                'type': 'number',
                'operator': 'equal',
                'value': 1
            },
            {
                'label': 'Designation',
                'field': 'Designation',
                'type': 'string',
                'operator': 'equal',
                'value': 'Developer'
            }]
        };
    }
}


