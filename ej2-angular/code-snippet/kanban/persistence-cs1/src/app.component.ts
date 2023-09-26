

import { Component } from '@angular/core';
import { CardSettingsModel, SwimlaneSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings'  [swimlaneSettings]='swimlaneSettings' enablePersistence='true'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open' allowToggle='true'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress' allowToggle='true'></e-column>
                  <e-column headerText='Testing' keyField='Testing' allowToggle='true'></e-column>
                  <e-column headerText='Done' keyField='Close' allowToggle='true'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'Assignee' };
}



