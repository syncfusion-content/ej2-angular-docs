

import { Component, ViewChild, OnInit } from '@angular/core';
import { RuleModel, QueryBuilderComponent } from '@syncfusion/ej2-angular-querybuilder';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { hardwareData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder #querybuilder class="row" width="70%" [dataSource]="data" [rule]="importRules">
                <e-columns>
                  <e-column field="TaskID" label="Task ID" type="number"></e-column>
                  <e-column field="Name" label="Name" type="string"></e-column>
                  <e-column field="Category" label="Category" type="string"></e-column>
                  <e-column field="SerialNo" label="SerialNo" type="string"></e-column>
                  <e-column field="InvoiceNo" label="InvoiceNo" type="string"></e-column>
                  <e-column field="Status" label="Status" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>
              <button class="e-btn e-primary e-qb-button" (click)="getSql()" >Get Sql</button>
              <button class="e-btn e-primary e-qbr-button" (click)="getJson()" >Get Json</button>
            <ejs-dialog #dialog [header]="promptHeader" [animationSettings]="animationSettings" [showCloseIcon]='showCloseIcon' [height]="height" [width]="width" [visible]="hidden"></ejs-dialog>`
})

export class AppComponent implements OnInit {
    public data?: Object[];
    public importRules?: RuleModel;
    @ViewChild('querybuilder')
    public qryBldrObj?: QueryBuilderComponent;
    @ViewChild('dialog')
    public Dialog?: DialogComponent;
    public animationSettings: Object = { effect: 'Zoom',  duration: 400 };
    public showCloseIcon: Boolean = true;
    public hidden: Boolean = false;
    public width: string = '70%';
    public height: string = '80%';
    public promptHeader: string = 'Querybuilder Rule';
    ngOnInit(): void {
        this.data = hardwareData;
        this.importRules = {
        'condition': 'or',
        'rules': [{
            'label': 'Category',
            'field': 'Category',
            'type': 'string',
            'operator': 'equal',
            'value': 'Laptop'
        }]
    };
    }
     getSql(): void {
        this.Dialog!.content = this.qryBldrObj!.getSqlFromRules(this.qryBldrObj!.getRules());
        this.Dialog!.show();
    }
     getJson(): void {
         this.Dialog!.content =  '<pre>' + JSON.stringify({ condition: this.qryBldrObj!.rule.condition, rules: this.qryBldrObj!.rule.rules }, null, 4) + '</pre>';
        this.Dialog!.show();
    }
}



