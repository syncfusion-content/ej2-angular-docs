import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { ActionEventArgs, RuleModel } from '@syncfusion/ej2-querybuilder';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { closest } from '@syncfusion/ej2-base';
import { ChangeEventArgs as DDLChangeEventArgs, FieldSettingsModel } from '@syncfusion/ej2-dropdowns';
import { ChangeEventArgs as CheckBoxChangeEventArgs } from '@syncfusion/ej2-buttons';

@Component({
imports: [
    CommonModule,
	  QueryBuilderModule,
    CheckBoxModule,
    DropDownListModule,
    DropDownButtonModule
  ],


standalone: true,
  selector: 'app-root',
  templateUrl: `template-driven.html`
})

export class AppComponent implements OnInit {
  @ViewChild('querybuilder') qryBldrObj: QueryBuilderComponent | undefined;
  public ds: { [key: string]: Object}[] = [{'key': 'AND', 'value': 'and'},{'key': 'OR', 'value': 'or'}];
  public ddbitems?: ItemModel[];
  public importRules?: RuleModel;
  public actionArgs?: ActionEventArgs;
  public deleteGroupBtn?: Element;
  public fields?: FieldSettingsModel;
  ngOnInit(): void {
    this.importRules = {
      'condition': 'and', 'not': true,
      'rules': [{
        'label': 'Age',
        'field': 'Age',
        'type': 'number',
        'operator': 'equal',
        'value': 34
      },
      {
        'label': 'LastName',
        'field': 'LastName',
        'type': 'string',
        'operator': 'equal',
        'value': 'vinit'
      },
      {
        'condition': 'or',
        'rules': [{
          'label': 'Age',
          'field': 'Age',
          'type': 'number',
          'operator': 'equal',
          'value': 34
        }]
      }]
    };
     this.ddbitems = [
      {
        text: 'AddGroup',
        iconCss: 'e-icons e-add-icon e-addgroup'
      },
      {
        text: 'AddCondition',
        iconCss: 'e-icons e-add-icon e-addrule'
      }];
      this.fields = { text: 'key', value: 'value' };
  }

  onChange(e: CheckBoxChangeEventArgs, ruleID: string): void {
    let elem: HTMLElement = document.getElementById(ruleID)!.querySelector('.e-rule-value') as HTMLElement;
    this.qryBldrObj!.notifyChange(e.checked as boolean, elem, 'not');
  }

  conditionChange(e: DDLChangeEventArgs): void {
    this.qryBldrObj!.notifyChange(e.value as string, e.element, 'condition');
  }

  onSelect(event: MenuEventArgs): void {
    let addbtn: Element = closest(event.element,'.e-dropdown-popup'); let ddbId: string = addbtn.id;
    let ddb: string[]= ddbId.split('_');
    if (event.item.text === 'AddGroup') {
      this.qryBldrObj!.addGroups([{condition: 'or', 'rules': [{}], not: false}], ddb[1]);
    } else if (event.item.text === 'AddCondition') {
     this.qryBldrObj!.addRules([{}], ddb[1]);
    }
  }

  onClick(e: MouseEvent): void {
    this.qryBldrObj!.deleteGroup(closest((e.target as Element), '.e-group-container'));
  }
}



