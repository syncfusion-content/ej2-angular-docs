

import { Component, ViewChild, OnInit } from '@angular/core';
import { RuleModel, QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { QueryLibrary } from '@syncfusion/ej2-querybuilder';
import { hardwareData } from './datasource';

QueryBuilderComponent.Inject(QueryLibrary);

@Component({
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder class="row" width="70%" [dataSource]="data" [rule]="importRules" [showButtons]="showButtons">
                <e-columns>
                  <e-column field="TaskID" label="Task ID" type="number"></e-column>
                  <e-column field="Name" label="Name" type="string"></e-column>
                  <e-column field="Category" label="Category" type="string"></e-column>
                  <e-column field="SerialNo" label="SerialNo" type="string"></e-column>
                  <e-column field="InvoiceNo" label="InvoiceNo" type="string"></e-column>
                  <e-column field="Status" label="Status" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>
               <button class="e-btn e-primary e-qb-button" (click)="cloneGroup()" >Clone Group</button>
               <button class="e-btn e-primary e-qb-button" (click)="cloneRule()" >Clone Rule</button>`
})

export class AppComponent implements OnInit {
    public data?: Object[];
    public importRules?: RuleModel;
    public showButtons: Object = {ruleDelete: true, groupInsert: true, groupDelete: true, cloneGroup: false, cloneRule: false};
     @ViewChild('querybuilder')
    public qryBldrObj?: QueryBuilderComponent;
    ngOnInit(): void {
        this.data = hardwareData;
        this.importRules = {
            'condition': 'and',
            'rules': [{
                    'label': 'Task ID',
                    'field': 'TaskID',
                    'type': 'number',
                    'operator': 'equal',
                    'value': 1
                },
                {
                    'label': 'Name',
                    'field': 'Name',
                    'type': 'string',
                    'operator': 'equal',
                    'value': 'Sales Manager'
                },
                {
                    condition: "or", rules: [
                        { 'label': 'Name',
                        'field': 'Name',
                        'type': 'string',
                        'operator': 'equal',
                        'value': 'Engineer' }
                    ]
                }
            ]
            };
    }
    cloneGroup(): void {
        this.qryBldrObj!.cloneGroup("querybuilder_group0", "querybuilder_group1", 1);
    }
    cloneRule(): void {
        this.qryBldrObj!.cloneRule("querybuilder_group0_rule0", "querybuilder_group0", 1);
    }
}



