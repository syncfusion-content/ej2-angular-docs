import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component, ViewChild, OnInit } from '@angular/core';
import { RuleModel, QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { QueryLibrary } from '@syncfusion/ej2-querybuilder';
import { employeeData } from './datasource';

QueryBuilderComponent.Inject(QueryLibrary);

@Component({
imports: [
        
        QueryBuilderModule,
    ],


standalone: true,
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder class="row" width="70%" [dataSource]="data" [rule]="importRules" allowDragAndDrop="true">
                <e-columns>
                    <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
                    <e-column field="FirstName" label="First Name" type="string"></e-column>
                    <e-column field="LastName" label="Title Of Courtesy" type="string"></e-column>
                    <e-column field="Age" label="Age" type="number"></e-column>
                    <e-column field="IsDeveloper" label="Is Developer" type="boolean"></e-column>
                    <e-column field="PrimaryFramework" label="Primary Framework" type="string"></e-column>
                    <e-column field="HireDate" label="Hire Date" type="date" format="dd/MM/yyyy"></e-column>
                    <e-column field="Country" label="Country" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>`
})

export class AppComponent implements OnInit {
    public data?: Object[];
    public importRules?: RuleModel;
     @ViewChild('querybuilder')
    public qryBldrObj?: QueryBuilderComponent;
    ngOnInit(): void {
        this.data = employeeData;
        this.importRules = {
            condition: "and",
            rules: [
                { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Andre" },
                { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
                { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 29 },
                {
                    condition: "or", rules: [
                        { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true },
                        { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "React" }
                    ]
                },
                { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["22/11/2023", "30/11/2023"] },
            ],
        };
    }
}



