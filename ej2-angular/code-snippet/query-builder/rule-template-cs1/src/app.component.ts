

import { Component, ViewChild, OnInit } from '@angular/core';
import { QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { ActionEventArgs, RuleModel } from '@syncfusion/ej2-querybuilder';
import { compile } from '@syncfusion/ej2-base';
import { DataManager, Predicate, Query } from '@syncfusion/ej2-data';
import { employeeData } from './datasource';

@Component({
    selector: 'app-root',
    templateUrl: `template-driven.html`
})

export class AppComponent implements OnInit {
@ViewChild('querybuilder') qryBldrObj: QueryBuilderComponent | undefined;
  public importRules?: RuleModel;
  public rangeticks?: Object;

  ngOnInit(): void {
    this.importRules = {
      'condition': 'and',
      'rules': [{
        'label': 'Age',
        'field': 'Age',
        'type': 'number',
        'operator': 'greaterthanorequal',
        'value': 32
      }]
    };
    this.rangeticks = { placement: 'Before', largeStep: 5, smallStep: 1, showSmallTicks: true };
  }

  actionBegin(args: ActionEventArgs): void {
    if (args.requestType === 'template-initialize') {
      args.rule!.operator = 'greaterthanorequal';
      if (args.rule!.value === '') {
        args.rule!.value = 30;
      }
    }
  }

  fieldChange(e: any): void {
      this.qryBldrObj!.notifyChange(e.value, e.element, 'field');
  };

  valueChange(e: any, ruleID: string): void {
    let elem: HTMLElement = document.getElementById(ruleID) as HTMLElement;
    this.qryBldrObj!.notifyChange(e.value as Date, elem, 'value');
    this.refreshTable(this.qryBldrObj!.getRule(elem), ruleID);
  }

  viewDetails(ruleID: string): void {
    let ruleElem: HTMLElement = document.getElementById(ruleID) as HTMLElement;
    let element: HTMLElement = document.getElementById(ruleID + '_section') as HTMLElement;
    if (element.className.indexOf('e-hide') > -1) {
      this.refreshTable(this.qryBldrObj!.getRule(ruleElem), ruleID);
      element.className = element.className.replace('e-hide', '');
      document.getElementById(ruleID + '_option')!.querySelector('.e-content')!.textContent = 'Hide Details';
    } else {
      element.className += ' e-hide';
      document.getElementById(ruleID + '_option')!.querySelector('.e-content')!.textContent = 'View Details';
    }
  }

  refreshTable(rule: RuleModel, ruleID: string): void {
    let template: string = '<tr><td>${EmployeeID}</td><td>${FirstName}</td><td>${Age}</td></tr>';
    let compiledFunction: any = compile(template);
    let dataManagerQuery: Query = this.qryBldrObj!.getDataManagerQuery({condition: 'and', rules: [rule]});
    let dataManager: DataManager = new DataManager(employeeData);
    dataManager.defaultQuery = dataManagerQuery;
    let result: object[] = dataManager.executeLocal();
    let table: HTMLElement = document.getElementById(ruleID + '_datatable') as HTMLElement;
    if (table) {
      if (result.length) {
        table.style.display = 'block';
      } else {
        table.style.display = 'none';
      }
      table.querySelector('tbody')!.innerHTML = '';
      result.forEach((data) => {
          table.querySelector('tbody')!.appendChild(compiledFunction(data)[0].querySelector('tr'));
      });
    }
  }
}



