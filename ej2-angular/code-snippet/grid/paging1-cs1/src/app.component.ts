

import { L10n, setCulture } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

setCulture('ar-AE');

L10n.load({
    'ar-AE': {
        grid: {
            EmptyRecord: 'لا سجلات لعرضها',
            EmptyDataSourceError: 'يجب أن يكون مصدر البيانات فارغة في التحميل الأولي منذ يتم إنشاء الأعمدة من مصدر البيانات في أوتوجينيراتد عمود الشبكة'
        },
        pager: {
            currentPageInfo: '{0} من {1} صفحة',
            totalItemsInfo: '({0} العناصر)',
            firstPageTooltip: 'انتقل إلى الصفحة الأولى',
            lastPageTooltip: 'انتقل إلى الصفحة الأخيرة',
            nextPageTooltip: 'انتقل إلى الصفحة التالية',
            previousPageTooltip: 'انتقل إلى الصفحة السابقة',
            nextPagerTooltip: 'انتقل إلى عناصر بيجر التالية',
            previousPagerTooltip: 'للذهاب إلى عناصر بيجر السابقة'
        }
    }
});

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [enableRtl]='true' [locale]='locale' [allowPaging]='true' [pageSettings]='pageOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public pageOptions?: PageSettingsModel;
    public locale: any = 'ar-AE';

    ngOnInit(): void {
        this.data = data;
        this.pageOptions = { pageSize: 7 };
    }
}



