

import { Component } from '@angular/core';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open' allowToggle='true' [isExpanded]='isExpanded'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress' allowToggle='true'></e-column>
                  <e-column headerText='Testing' keyField='Testing' allowToggle='true' [isExpanded]='isExpanded'></e-column>
                  <e-column headerText='Done' keyField='Close' allowToggle='true'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public isExpanded: Boolean = false;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
}



