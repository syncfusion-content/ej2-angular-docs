

import { Component } from '@angular/core';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings'>
                <e-columns>
                    <e-column headerText='Open' keyField='Open'></e-column>
                    <e-column headerText='In Progress' keyField='InProgress'></e-column>
                    <e-column headerText='Review' keyField='Review'></e-column>
                    <e-column headerText='Completed' keyField='Close'></e-column>
                </e-columns>
                <e-stackedHeaders>
                    <e-stackedHeader text='To Do' keyFields='Open'></e-stackedHeader>
                    <e-stackedHeader text='Development Phase' keyFields='InProgress, Review'></e-stackedHeader>
                    <e-stackedHeader text='Done' keyFields='Close'></e-stackedHeader>
                </e-stackedHeaders>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
}



