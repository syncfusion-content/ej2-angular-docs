

import { Component, ViewChild, OnInit } from '@angular/core';
import { RuleModel, QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { employeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder width="70%" [dataSource]="data" allowValidation="true">
                <e-columns>
                  <e-column field="EmployeeID" label="Employee ID" type="number" validation="validateRule"></e-column>
                  <e-column field="FirstName" label="First Name" type="string"></e-column>
                  <e-column field="TitleOfCourtesy" label="Title Of Courtesy" type="boolean" [values]="values"></e-column>
                  <e-column field="Title" label="Title" type="string"></e-column>
                  <e-column field="HireDate" label="Hire Date" type="date" format="dd/MM/yyyy"></e-column>
                  <e-column field="Country" label="Country" type="string"></e-column>
                  <e-column field="City" label="City" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>
              <button class="e-btn e-primary e-qb-button" (click)="validate()" >Validate Field</button>`
})

export class AppComponent implements OnInit {
    public data?: Object[];
    public importRules?: RuleModel;
     @ViewChild('querybuilder')
    public qryBldrObj?: QueryBuilderComponent;
    public validateRule: { [key: string]: Boolean } = { isRequired: true };
    public values: string[] = ['Mr.', 'Mrs.'];
    ngOnInit(): void {
        this.data = employeeData;
    }
    validate(): void {
        this.qryBldrObj!.validateFields();
    }

}



