


import { Component, ViewChild, OnInit } from '@angular/core';
import { QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import {  RuleModel, RuleChangeEventArgs, ColumnsModel } from '@syncfusion/ej2-querybuilder';
import { RadioButton, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { getComponent} from '@syncfusion/ej2-base';
import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { RadioButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-root',
  templateUrl: `template-driven.html`
})
export class AppComponent implements OnInit {
  @ViewChild('querybuilder') qryBldrObj: QueryBuilderComponent | undefined;
  public importRules?: RuleModel;
  public columns1?: ColumnsModel[];
  public columns2?: ColumnsModel[];
  public columns3?: ColumnsModel[];
  ngOnInit(): void {
    this.importRules = {
      condition: 'and',
      rules: [{
        label: 'ID',
        field: 'Employee.ID',
        type: 'string',
        operator: 'equal',
        value: 0
      },
      {
        label: 'Last Name',
        field: 'Name.LastName',
        type: 'string',
        operator: 'contains',
        value: 'malan'
      },
      {
        condition: 'or',
        rules: [{
            label: 'City',
            field: 'Country.State.City',
            operator: 'startswith',
            type: 'string',
            value: 'U'
        },
        {
            label: 'Region',
            field: 'Country.Region',
            operator: 'endswith',
            type: 'string',
            value: 'c'
        },
        {
            label: 'Name',
            field: 'Country.Name',
            operator: 'isnotempty'
        }]
      }]
    };
    this.columns1 = [
      { field: 'ID', label: 'ID', type: 'number'},
      { field: 'DOB', label: 'Date of birth', type: 'date'},
      { field: 'HireDate', label: 'Hire Date', type: 'date'},
      { field: 'Salary', label: 'Salary', type: 'number'},
      { field: 'Age', label: 'Age', type: 'number'},
      { field: 'Title', label: 'Title', type: 'string'}
    ]
    this.columns2 = [
      { field: 'FirstName', label: 'First Name', type: 'string'},
      { field: 'LastName', label: 'Last Name', type: 'string'}
    ]
    this.columns3 = [
      { field: 'State', label: 'State', columns : [
        { field: 'City', label: 'City', type: 'string'},
        { field: 'Zipcode', label: 'Zip Code', type: 'number'}] },
    { field: 'Region', label: 'Region', type: 'string'},
    { field: 'Name', label: 'Name', type: 'string'}
    ]
  }

  onReset(e: Event): void {
    this.qryBldrObj?.reset();
  }
  onSetSqlRules(e:Event): void {
    this.qryBldrObj?.setRulesFromSql("Employee.ID = 0 AND Name.LastName LIKE ('%malan%') AND (Country.State.City LIKE ('U%') AND Country.Region LIKE ('%c') AND Country.Name IS NOT EMPTY)");
  }
  onSetRules(e:Event): void {
    this.qryBldrObj?.setRules((this as any).importRules);
  }

}




