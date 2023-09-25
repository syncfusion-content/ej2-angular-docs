

import { Component, OnInit } from '@angular/core';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { RuleModel } from '@syncfusion/ej2-angular-querybuilder';
import { hardwareData } from './datasource';
setCulture('ar-AE');
L10n.load({
   'ar-AE': {
        'querybuilder': {
            'AddGroup': 'إضافة مجموعة',
            'AddCondition': 'اضافة الشرط',
            'DeleteRule': 'أزل هذا الشرط',
            'DeleteGroup': 'حذف المجموعة',
            'Edit': 'تصحيح',
            'SelectField': 'اختر مجال',
            'SelectOperator': 'حدد المشغل',
            'StartsWith': 'ابدا ب',
            'EndsWith': 'ينتهي مع',
            'Contains': 'يحتوي على',
            'Equal': 'مساو',
            'NotEqual': 'ليس متساوي',
            'LessThan': 'أقل من',
            'LessThanOrEqual': 'اصغر من او يساوي',
            'GreaterThan': 'أكثر من',
            'GreaterThanOrEqual': 'أكبر من أو يساوي',
            'Between': 'ما بين',
            'NotBetween': 'ليس بينهما',
            'In': 'في',
            'NotIn': 'ليس في',
            'Remove': 'إزالة',
            'ValidationMessage': 'هذه الخانة مطلوبه'
        }
    }
});

@Component({
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
                <ejs-querybuilder #querybuilder width="70%" [dataSource]="data" [rule]="importRules" locale="ar-AE" enableRtl="true">
                <e-columns>
                  <e-column field="TaskID" label="Task ID" type="number"></e-column>
                  <e-column field="Name" label="Name" type="string"></e-column>
                  <e-column field="Category" label="Category" type="string"></e-column>
                  <e-column field="SerialNo" label="SerialNo" type="string"></e-column>
                  <e-column field="InvoiceNo" label="InvoiceNo" type="string"></e-column>
                  <e-column field="Status" label="Status" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>`
})

export class AppComponent implements OnInit {
    public data?: Object[];
    public importRules?: RuleModel;
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
}



