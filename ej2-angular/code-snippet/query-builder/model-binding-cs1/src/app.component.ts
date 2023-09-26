

import { Component, ViewChild, OnInit } from '@angular/core';
import { QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import {  RuleModel } from '@syncfusion/ej2-querybuilder';

@Component({
  selector: 'app-root',
  templateUrl: `template-driven.html`
})
export class AppComponent implements OnInit {
  @ViewChild('querybuilder') qryBldrObj: QueryBuilderComponent | undefined;
  public importRules?: RuleModel;
  ngOnInit(): void {
    this.importRules = {
      'condition': 'and',
      'rules': [{
        'label': 'Employee ID',
        'field': 'EmployeeID',
        'type': 'number',
        'operator': 'equal',
        'value': 1001
    }]
    };
  }
}



