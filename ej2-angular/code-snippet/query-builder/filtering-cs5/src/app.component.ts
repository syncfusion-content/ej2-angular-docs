

import { Component, OnInit, ViewChild } from '@angular/core';
import { RuleModel, QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { employeeData  } from './datasource';
import { DataManager, Query } from '@syncfusion/ej2-data';
@Component({
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder width="70%" [dataSource]="data" [rule]="importRules">
                <e-columns>
                  <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
                  <e-column field="FirstName" label="First Name" type="string"></e-column>
                  <e-column field="TitleOfCourtesy" label="Title Of Courtesy" type="boolean" [values]="values"></e-column>
                  <e-column field="Title" label="Title" type="string"></e-column>
                  <e-column field="HireDate" label="Hire Date" type="date" format="dd/MM/yyyy"></e-column>
                  <e-column field="Country" label="Country" type="string"></e-column>
                  <e-column field="City" label="City" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>
              <button class="e-btn e-primary e-qb-button" (click)="refreshTable()" >Get Data</button>
              <table id='datatable'class='e-table'>
                <tr><th>EmployeeID</th><th>Title</th><th>City</th></tr>
                <tr *ngFor="let item of items">
                <td>{{item.EmployeeID}}</td><td>{{item.Title}}</td><td>{{item.City}}</td>
                </tr>
                </table>`
})

export class AppComponent implements OnInit {

    public data?: Object[];
    public importRules?: RuleModel;
     @ViewChild('querybuilder')
    public qryBldrObj?: QueryBuilderComponent;
    public values: string[] = ['Mr.', 'Mrs.'];
    public items?: Object[]| any;
    public  dataManagerQuery!:Query;
    ngOnInit(): void {
        this.data = employeeData ;
        this.importRules = {
        'condition': 'and',
        'rules': [{
                'label': 'Employee ID',
                'field': 'EmployeeID',
                'type': 'number',
                'operator': 'equal',
                'value': 1
            }]
        };
    }
      refreshTable(): void {
        this.dataManagerQuery = new Query().select(['EmployeeID', 'Title', 'City']).where(this.qryBldrObj!.getPredicate(this.qryBldrObj!.rule)).take(8);
        this.items = [];
        this.items = new DataManager(<JSON[]>this.data).executeLocal(this.dataManagerQuery);
    }

}



