

import { Component, ViewChild, OnInit } from '@angular/core';
import { RuleModel, QueryBuilderComponent, ColumnsModel, TemplateColumn } from '@syncfusion/ej2-angular-querybuilder';
import { expenseData } from './datasource';
import { DropDownList, MultiSelect } from '@syncfusion/ej2-dropdowns';
import { getComponent, createElement } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder width="70%" [dataSource]="data" [rule]="importRules" [columns]="filter">
              </ejs-querybuilder>`
})

export class AppComponent implements OnInit {

    public data?: Object[];
    public importRules?: RuleModel;
     @ViewChild('querybuilder')
    public qryBldrObj?: QueryBuilderComponent;
    public filter?: ColumnsModel[];
    public paymentTemplate?: TemplateColumn;
    public inOperators: string[] = ['in', 'notin'];
    ngOnInit(): void {
        this.data = expenseData;
        this.paymentTemplate = {
        create: () => {
            return createElement('input', { attrs: { 'type': 'text' } });
        },
        destroy: (args: { elementId: string }) => {
            let multiSelect: MultiSelect = (getComponent(document.getElementById(args.elementId) as any, 'multiselect') as MultiSelect);
            if (multiSelect) {
                multiSelect.destroy();
            }
            let dropdown: DropDownList = (getComponent(document.getElementById(args.elementId) as any, 'dropdownlist') as DropDownList);
            if (dropdown) {
                dropdown.destroy();
            }
        },
        write: (args: { elements: Element, values: string[] | string, operator: string }) => {
            let ds: string[] = ['Cash', 'Debit Card', 'Credit Card', 'Net Banking', 'Wallet'];
            if (this.inOperators.indexOf(args.operator) > -1) {
                let multiSelectObj: MultiSelect = new MultiSelect({
                    dataSource: ds,
                    value: args.values as string[],
                    mode: 'CheckBox',
                    placeholder: 'Select Transaction',
                    change: (e: any) => {
                        this.qryBldrObj!.notifyChange(e.value, e.element);
                    }
                });
                multiSelectObj.appendTo('#' + args.elements.id);
            } else {
                let dropDownObj: DropDownList = new DropDownList({
                    dataSource: ds,
                    value: args.values as string,
                    change: (e: any) => {
                        this.qryBldrObj!.notifyChange(e.itemData.value, e.element);
                    }
                });
                dropDownObj.appendTo('#' + args.elements.id);
            }
        }
    };
         this.filter = [
        { field: 'Category', label: 'Category', type: 'string' },
        { field: 'PaymentMode', label: 'Payment Mode', type: 'string', template: this.paymentTemplate },
        { field: 'TransactionType', label: 'Transaction Type', type: 'string' },
        { field: 'Description', label: 'Description', type: 'string' },
        { field: 'Date', label: 'Date', type: 'date' },
        { field: 'Amount', label: 'Amount', type: 'number'}
    ];
        this.importRules = {
        'condition': 'and',
        'rules': [{
                'label': 'Payment Mode',
                'field': 'PaymentMode',
                'type': 'string',
                'operator': 'equal',
                'value': 'Cash'
            }]
        };
    }

}



