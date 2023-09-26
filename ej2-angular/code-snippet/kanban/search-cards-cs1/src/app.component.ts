

import { Component, ViewChild } from '@angular/core';
import { KanbanComponent, CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { Query } from '@syncfusion/ej2-data';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<table>
                <tbody>
                    <td style="width: 200px">
                    <ejs-textbox id="search" #search placeholder="Enter search text" [showClearButton]="true" (keyup)="searchClick($event)"></ejs-textbox>
                    </td>
                    <td>
                    <button ejs-button class="e-btn" id="reset" (click)='reset()'>Reset</button>
                </tbody>
            </table>
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
    @ViewChild('search') textBoxObj?: TextBoxComponent;
    @ViewChild('kanban') kanbanObj?: KanbanComponent;
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    searchClick(e: KeyboardEvent): void {
        let searchValue: string = (<HTMLInputElement>e.target).value;
        let searchQuery: Query = new Query();
        if (searchValue !== '') {
            searchQuery = new Query().search(searchValue, ['Id', 'Summary'], 'contains', true);
        }
        (this.kanbanObj as KanbanComponent).query = searchQuery;
    }
    reset(): void {
        (this.textBoxObj as TextBoxComponent).value = '';
        (this.kanbanObj as KanbanComponent).query = new Query();
    }
}



