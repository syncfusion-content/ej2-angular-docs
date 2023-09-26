

import { Component, ViewChild } from '@angular/core';
import { KanbanComponent, CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { Query } from '@syncfusion/ej2-data';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: ` <ejs-dropdownlist #dropdown [dataSource]='priorityData' width='250px'
                (change)='change($event)' index=0 placeholder='Select a priority'></ejs-dropdownlist>
            <ejs-kanban #kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    @ViewChild('kanban') kanbanObj?: KanbanComponent;
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    public priorityData: string[] = ['None', 'High', 'Normal', 'Low'];
    change(args: ChangeEventArgs): void {
        let filterQuery: Query = new Query();
        if (args.value !== 'None') {
            filterQuery = new Query().where('Priority', 'equal', args.value);
        }
        (this.kanbanObj as KanbanComponent).query = filterQuery;
    }
}



