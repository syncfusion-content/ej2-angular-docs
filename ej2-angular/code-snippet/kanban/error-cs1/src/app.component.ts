

import { Component, ViewChild } from '@angular/core';
import { CardSettingsModel, KanbanComponent } from '@syncfusion/ej2-angular-kanban';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban #Kanban keyField='Status' [dataSource]='dataManager' [cardSettings]='cardSettings'  (actionFailure)="onActionFailure($event)">
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    @ViewChild('Kanban') public kanban?: KanbanComponent;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    public dataManager: DataManager = new DataManager({
       url: 'http://some.com/invalidUrl'
    });
    onActionFailure(e: Error): void {
      let span: HTMLElement = document.createElement('span');
      ((this.kanban as KanbanComponent).element.parentNode as ParentNode).insertBefore(span, (this.kanban as KanbanComponent).element);
      span.style.color = '#FF0000'
      span.innerHTML = 'Server exception: 404 Not found';
    }
}



