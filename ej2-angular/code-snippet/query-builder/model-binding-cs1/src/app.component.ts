import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder'
import { DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule, RadioButtonModule} from '@syncfusion/ej2-angular-buttons'
import { TextBoxModule, NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars'



import { Component, ViewChild, OnInit } from '@angular/core';
import { QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import {  RuleModel } from '@syncfusion/ej2-querybuilder';

@Component({
imports: [
    
	  QueryBuilderModule,
    CheckBoxModule,
    DropDownListModule,
    DropDownButtonModule,
    DatePickerModule,
    TextBoxModule,
    NumericTextBoxModule,
    MultiSelectModule,
    RadioButtonModule
  ],


standalone: true,
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



