

import { Component, ViewChild } from '@angular/core';
import { KanbanComponent, CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<button ejs-button class="e-btn" id="particularColumn" (click)='toggle()'>Enable Allow Toggle</button>
            <button ejs-button class="e-btn" id="column" (click)='change()'>Change Columns</button>
            <ejs-kanban #kanbanObj keyField='Status' [dataSource]='data' [cardSettings]='cardSettings'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    @ViewChild("kanbanObj") kanbanObj?: KanbanComponent;
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    public toggle = (): void => {
        (this.kanbanObj as KanbanComponent).columns[1].allowToggle = true;
    }
    public change = (): void => {
        (this.kanbanObj as KanbanComponent).columns = [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'Done', keyField: 'Close' }
        ]
    }
}



