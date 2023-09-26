

import { Component, ViewChild, OnInit } from '@angular/core';
import { QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { ActionEventArgs, RuleModel } from '@syncfusion/ej2-querybuilder';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-splitbuttons';
import { closest } from '@syncfusion/ej2-base';

@Component({
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
  public fields?: Object;
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

  onChange(e: any): void {
    this.qryBldrObj!.notifyChange(e.checked,e.event.target, 'not');
  }

  conditionChange(e: any): void {
    this.qryBldrObj!.notifyChange(e.value, e.element, 'condition');
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

  onClick(e: any): void {
    this.qryBldrObj!.deleteGroup(closest(e.target.offsetParent, '.e-group-container'));
  }
}



