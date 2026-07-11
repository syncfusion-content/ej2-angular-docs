import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, ViewChild, OnInit } from '@angular/core';
import { QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { RuleModel } from '@syncfusion/ej2-querybuilder';
import { ChangeEventArgs as CheckBoxChangeEventArgs } from '@syncfusion/ej2-buttons';
import { ChangeEventArgs as DDLChangeEventArgs } from '@syncfusion/ej2-dropdowns';
@Component({
imports: [
        
        QueryBuilderModule,
		CheckBoxModule,
		DropDownListModule
    ],


standalone: true,
    selector: 'app-root',
    templateUrl: `template-driven.html`
})

export class AppComponent implements OnInit {
@ViewChild('querybuilder') qryBldrObj: QueryBuilderComponent | undefined;
  public paymentDataSource: string[] = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking'];
  public importRules?: RuleModel;
  public customOperators?: { value: string; key: string }[];
  ngOnInit(): void {
    this.importRules = {
      'condition': 'and',
      'rules': [{
        'label': 'Transaction Type',
        'field': 'TransactionType',
        'type': 'string',
        'operator': 'equal',
        'value': 'Expense'
      },
      {
        'label': 'Payment Mode',
        'field': 'PaymentMode',
        'type': 'string',
        'operator': 'equal',
        'value': 'Cash'
      }]
    };
    this.customOperators = [
      {value: 'equal', key: 'Equal'},
      {value: 'notequal', key: 'Not Equal'}
    ];
  }

  transactionChange(e: CheckBoxChangeEventArgs, ruleID: string): void {
    let elem: HTMLElement = document.getElementById(ruleID)!.querySelector('.e-rule-value') as HTMLElement;
    this.qryBldrObj!.notifyChange(e.checked === true ? 'Expense' : 'Income', elem, 'value');
  }

  paymentChange(e: DDLChangeEventArgs, ruleID: string): void {
    let elem: HTMLElement = document.getElementById(ruleID)!.querySelector('.e-rule-value') as HTMLElement;
    this.qryBldrObj!.notifyChange(e.value as string, elem, 'value');
  }
}