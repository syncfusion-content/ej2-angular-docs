

import { Component } from '@angular/core';
import { CardSettingsModel, ColumnsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' cssClass='kanban-header-template' [dataSource]='data' [cardSettings]='cardSettings'>
                <e-columns>
                    <e-column *ngFor="let column of columns;" headerText={{column.headerText}} keyField='{{column.keyField}}'>
                        <ng-template #template let-data>
                            <div class="header-template-wrap">
                                <div class="header-icon e-icons {{data.keyField}}"></div>
                                <div class="header-text">{{data.headerText}}</div>
                            </div>
                        </ng-template>
                    </e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        headerField: 'Id',
        contentField: 'Summary'
    };
    public columns: ColumnsModel[] = [
        { headerText: 'To Do', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'In Review', keyField: 'Review' },
        { headerText: 'Done', keyField: 'Close' }
    ];
}



