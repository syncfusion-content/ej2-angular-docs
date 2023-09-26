

import { Component, OnInit } from '@angular/core';
import { employeeData } from './datasource';
import { RuleModel } from '@syncfusion/ej2-angular-querybuilder';

@Component({
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder width="30%" [dataSource]="data" [rule]="importRules" summaryView="true">
                <e-columns>
                  <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
                  <e-column field="FirstName" label="First Name" type="string"></e-column>
                  <e-column field="TitleOfCourtesy" label="Title Of Courtesy" type="boolean" [values]="values"></e-column>
                  <e-column field="Title" label="Title" type="string"></e-column>
                  <e-column field="HireDate" label="Hire Date" type="date" format="dd/MM/yyyy"></e-column>
                  <e-column field="Country" label="Country" type="string"></e-column>
                  <e-column field="City" label="City" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>`
})

export class AppComponent implements OnInit {

    public data?: Object[];
    public importRules?: RuleModel;
    public values: string[] = ['Mr.', 'Mrs.'];
    ngOnInit(): void {
    this.data = employeeData;
    this.importRules = {
        'condition': 'and',
        'rules': [{
        'label': 'EmployeeID',
        'field': 'EmployeeID',
        'type': 'number',
        'operator': 'notequal',
        'value': '5'
    },
    {
        'condition': 'or',
            'rules': [{
            'label': 'Title Of Courtesy',
                'field': 'TitleOfCourtesy',
                'type': 'string',
                'operator': 'equal',
                'value': 'Mr.'
        },
        {
            'label': 'Country',
            'field': 'Country',
            'type': 'string',
            'operator': 'equal',
            'value': 'USA'
        },
        {
        'condition': 'and',
                'rules': [{
                'label': 'City',
                'field': 'City',
                'type': 'string',
                'operator': 'equal',
                'value': 'London'
            }]
        }]
    }]
};
    }
}



