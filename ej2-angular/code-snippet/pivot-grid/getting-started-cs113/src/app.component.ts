

import { Component } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';
import { IDataOptions, IDataSet, FieldListService, CalculatedFieldService, GroupingBarService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource';

@Component({
  selector: 'app-container',
  providers: [FieldListService, CalculatedFieldService, GroupingBarService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' [dataSourceSettings]=dataSourceSettings [width]=width
  allowCalculatedField='true' showGroupingBar='true' locale='ar-AE' enableRtl= true showFieldList='true'></ejs-pivotview></div>`
})

export class AppComponent {
    public dataSourceSettings?: IDataOptions;
    public width?: string;
    ngOnInit(): void {
        L10n.load({
            'ar-AE': {
                'pivotview': {
                    'grandTotal': 'المجموع الكلى',
                    'total': 'المجموع',
                    'value': 'القيمة',
                    'noValue': 'لا قيمة لها',
                    'row': 'صف',
                    'column': 'العمود',
                    'collapse': 'الانهيار',
                    'expand': 'توسيع'
                },
                'pivotfieldlist': {
                    'fieldList': 'قائمة الحقول',
                    'dropRowPrompt': 'تراجع الخلاف هنا',
                    'dropColPrompt': 'انخفاض العمود هنا',
                    'dropValPrompt': 'انخفاض قيمة هنا',
                    'dropFilterPrompt': 'انخفاض هنا عامل التصفية',
                    'addPrompt': 'اضافة حقل هنا',
                    'adaptiveFieldHeader': 'اختر الحقل',
                    'centerHeader': 'اسحب المجالات بين المناطق الموضحة ادناه:',
                    'add': 'اضافة',
                    'drag': 'اسحب',
                    'filters': 'عوامل التصفية',
                    'rows': 'الصفوف',
                    'columns': 'الاعمدة',
                    'values': 'قيم',
                    'search': 'البحث',
                    'close': 'قريب',
                    'cancel': 'الغاء',
                    'delete': 'احذف',
                    'alert': 'حالة تاهب قصوى',
                    'warning': 'تحذير',
                    'ok': 'موافق',
                    'allFields': 'جميع الحقول',
                    'noMatches': 'لا مباريات'
                }
            }
        });
        this.dataSourceSettings = {
            dataSource: Pivot_Data as IDataSet[],
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
        };
        this.width = "100%";
    }
 }



