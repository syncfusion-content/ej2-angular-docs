

import { Component } from '@angular/core';
import { ColumnsModel, CardSettingsModel, DialogSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { generateKanbanDataVirtualScrollData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban #kanbanObj id='KanbanVirtualScrolling' enableVirtualization='true'
  [dataSource]='kanbanData' keyField='Status' enableTooltip='true'
  [columns]='columnsSettings' [cardSettings]='cardSettings' [dialogSettings]='dialogSettings'>
  </ejs-kanban>`
})
export class AppComponent {
  public kanbanData: Object[];
  constructor() {
    this.kanbanData = generateKanbanDataVirtualScrollData();
  }
  public columnsSettings: ColumnsModel[] = [
    { headerText: 'To Do', keyField: 'Open' },
    { headerText: 'In Progress', keyField: 'InProgress' },
    { headerText: 'Code Review', keyField: 'Review' },
    { headerText: 'Done', keyField: 'Close' }
  ];
  public cardSettings: CardSettingsModel = {
    headerField: 'Id',
    contentField: 'Summary',
    selectionType: 'Multiple'
  };
  public dialogSettings: DialogSettingsModel = {
    fields: [
      { key: 'Id', text: 'ID', type: 'TextBox' },
      { key: 'Status', text: 'Status', type: 'DropDown' },
      { key: 'StoryPoints', text: 'Story Points', type: 'Numeric' },
      { key: 'Summary', text: 'Summary', type: 'TextArea' }
    ]
  };
}