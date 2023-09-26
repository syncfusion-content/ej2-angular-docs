

import { Component, ViewChild } from '@angular/core';
import { closest } from '@syncfusion/ej2-base';
import { CardSettingsModel, DragEventArgs, KanbanComponent } from '@syncfusion/ej2-angular-kanban';
import { kanbanAData, kanbanBData } from './datasource';
@Component({
  selector: 'app-root',
  template: `<div class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
        <h4>Kanban A</h4>
        <ejs-kanban id='KanbanA' #KanbanA keyField='Status' [dataSource]='dataA' [externalDropId]='externalKanbanADropId'
          [cardSettings]='cardSettings' (dragStop)='onKanbanADragStop($event)'>
          <e-columns>
            <e-column headerText='To do' keyField='Open'></e-column>
            <e-column headerText='Done' keyField='Close'></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
        <div class="col-sm-6">
        <h4>Kanban B</h4>
        <ejs-kanban id='KanbanB' #KanbanB keyField='Status' [dataSource]='dataB' [externalDropId]='externalKanbanBDropId'
          [cardSettings]='cardSettings' (dragStop)='onKanbanBDragStop($event)'>
          <e-columns>
            <e-column headerText='To do' keyField='Open'></e-column>
            <e-column headerText='Done' keyField='Close'></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      </div>
    </div>`
})
export class AppComponent {
  @ViewChild('KanbanA')
    public kanbanObjA?: KanbanComponent;
    @ViewChild('KanbanB')
    public kanbanObjB?: KanbanComponent;
    public dataA: Object[] = kanbanAData;
    public dataB: Object[] = kanbanBData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    public externalKanbanADropId: string[] = ["#KanbanB"];
    public externalKanbanBDropId: string[] = ["#KanbanA"];
    onKanbanADragStop(args: DragEventArgs) {
      let kanbanBElement: Element = <Element>closest(args.event.target as Element, '#KanbanB');
      if (kanbanBElement) {
        (this.kanbanObjA as KanbanComponent).deleteCard(args.data);
        (this.kanbanObjB as KanbanComponent).addCard(args.data, args.dropIndex);
        args.cancel = true;
    }
    };
    onKanbanBDragStop(args: DragEventArgs) {
      let kanbanAElement: Element = <Element>closest(args.event.target as Element, '#KanbanA');
      if (kanbanAElement) {
        (this.kanbanObjB as KanbanComponent).deleteCard(args.data);
        (this.kanbanObjA as KanbanComponent).addCard(args.data, args.dropIndex);
        args.cancel = true;
    }
    };
}



