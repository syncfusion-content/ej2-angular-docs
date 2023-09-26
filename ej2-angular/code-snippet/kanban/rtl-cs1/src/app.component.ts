

import { Component } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';
import { CardSettingsModel, SwimlaneSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';
L10n.load({
    'ar': {
        'kanban': {
            'items': 'العناصر',
            'min': 'أنا',
            'max': 'ماكس',
            'cardsSelected': 'تم تحديد البطاقات',
            'addTitle': 'إضافة بطاقة جديدة',
            'editTitle': 'تحرير تفاصيل البطاقة',
            'deleteTitle': 'حذف البطاقة',
            'deleteContent': 'هل أنت متأكد أنك تريد حذف هذه البطاقة؟',
            'save': 'حفظ',
            'delete': 'حذف',
            'cancel': 'إلغاء',
            'yes': 'نعم',
            'no': 'لا',
            'close': 'قريب',
            'noCard': 'لا توجد بطاقات لعرضها',
            'unassigned': 'غير معين'
        }
    }
});
@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings' locale='ar' [swimlaneSettings]='swimlaneSettings' enableRtl='true'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open' minCount='6'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress' maxCount='3'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    public swimlaneSettings: SwimlaneSettingsModel = {
        keyField: 'Assignee'
    };
}



