

import { L10n } from '@syncfusion/ej2-base';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems } from '@syncfusion/ej2-treegrid';
import { Filter } from '@syncfusion/ej2-angular-treegrid';


    L10n.load({
        'ar-AE': {
            'treegrid': {
                "EmptyRecord": "لا سجلات لعرضها",
                "Print": "طباعة",
                "FilterButton": "منقي",
                "ClearButton": "واضح",
                "StartsWith": "ابدا ب",
                "EndsWith": "ينتهي مع",
                "Contains": "يحتوي على",
                "Equal": "مساو",
                "NotEqual": "غير متساوي",
                "LessThan": "أقل من",
                "LessThanOrEqual": "اصغر من او يساوي",
                "GreaterThan": "أكثر من",
                "GreaterThanOrEqual": "أكبر من أو يساوي",
                "ChooseDate": "اختر تاريخا",
                "EnterValue": "أدخل القيمة",
                "FilterMenu": "منقي"
            },
            'pager': {
                'currentPageInfo': '{0} من {1} صفحة',
                'totalItemsInfo': '({0} العناصر)',
                'firstPageTooltip': 'انتقل إلى الصفحة الأولى',
                'lastPageTooltip': 'انتقل إلى الصفحة الأخيرة',
                'nextPageTooltip': 'انتقل إلى الصفحة التالية',
                'previousPageTooltip': 'انتقل إلى الصفحة السابقة',
                'nextPagerTooltip': 'الذهاب إلى بيجر المقبل',
                'previousPagerTooltip': 'الذهاب إلى بيجر السابقة'
            },
            "dropdowns": {
                "noRecordsTemplate": "لا توجد سجلات"
            },
            "datepicker": {
                "placeholder": "اختر تاريخا",
                "today": "اليوم"
            }
        }
    });

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' [enableRtl]='true' locale='ar-AE' #treegrid height='220' [allowPaging]='true' [allowExcelExport]='true' [pageSettings]='pager' [treeColumnIndex]='1' [allowFiltering]='true' [filterSettings]='filters' childMapping='subtasks' [toolbar]='toolbarOptions'>
        <e-columns>
            <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
            <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
            <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
            <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
     </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pager?: Object;
    public toolbarOptions?: ToolbarItems[];
    public filters?: Filter | any;

    ngOnInit(): void {
        this.data = sampleData;
        this.pager = {pageSize: 7};
        this.toolbarOptions = ['Print'];
        this.filters = { type: 'Menu' };
    }
}



