


import { Component, ViewChild } from '@angular/core';
import { closest } from '@syncfusion/ej2-base';
import { CardSettingsModel, DragEventArgs, KanbanComponent } from '@syncfusion/ej2-angular-kanban';
import { kanbanData, treeViewData } from './datasource';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
@Component({
  selector: 'app-root',
  template: `<div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
        <h4>Kanban</h4>
        <ejs-kanban id='Kanban' #Kanban keyField='Status' [dataSource]='data' [externalDropId]='externalKanbanDropId'
          [cardSettings]='cardSettings' (dragStop)='onKanbanDragStop($event)'>
          <e-columns>
            <e-column headerText='To do' keyField='Open'></e-column>
              <e-column headerText='Done' keyField='Close'></e-column>
          </e-columns>
        </ejs-kanban>
      </div>
      <div class="col-md-6">
        <h4>TreeView</h4>
        <ejs-treeview id='TreeView' #TreeView [fields]='field' [allowDragAndDrop]='allowDragAndDrop' (nodeDragStop)="onTreeDragStop($event)">
            <ng-template #nodeTemplate="" let-data="">
                <div id="treelist">
                  <div id="treeviewlist">{{data.Id}} - {{data.Status}}</div>
                </div>
            </ng-template>
        </ejs-treeview>
      </div>
     </div>
   </div>`
})
export class AppComponent {
  @ViewChild('Kanban')
  public kanbanObj?: KanbanComponent;
  @ViewChild('TreeView')
  public treeObj?: TreeViewComponent;
  public data: Object[] = kanbanData;
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id'
  };
  public externalKanbanDropId: string[] = ['#TreeView'];
  public field: Object = { dataSource: treeViewData, id: 'Id', text: 'Status' };
  public allowDragAndDrop: boolean = true;
  onKanbanDragStop(args: DragEventArgs) {
    let treeViewElement: Element = <Element>closest(args.event.target as Element, '#TreeView');
    if (treeViewElement) {
      (this.kanbanObj as KanbanComponent).deleteCard(args.data);
      (this.treeObj as TreeViewComponent).addNodes(args.data);
      args.cancel = true;
    }
  };
  onTreeDragStop(args: DragAndDropEventArgs) {
    let kanbanElement: Element = <Element>closest(args.event.target as Element, '#Kanban');
    if (kanbanElement) {
      let treeData: { [key: string]: Object }[] =
      (this.treeObj as TreeViewComponent).fields.dataSource as { [key: string]: Object }[];
      const filteredData: { [key: string]: Object }[] =
        treeData.filter((item: any) => item.Id === parseInt(args.draggedNodeData['id'] as string, 10));
        (this.treeObj as TreeViewComponent).removeNodes([args.draggedNodeData['id']] as string[]);
        (this.kanbanObj as KanbanComponent).openDialog('Add', filteredData[0]);
      args.cancel = true;
    }
  };
}



