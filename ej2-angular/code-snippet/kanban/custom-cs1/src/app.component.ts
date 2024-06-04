import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { KanbanModule } from '@syncfusion/ej2-angular-kanban'



import { Component } from '@angular/core';
import { CardSettingsModel, DialogEventArgs } from '@syncfusion/ej2-angular-kanban';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

class TaskIdAdaptor extends ODataAdaptor {
  override processResponse(): Object {
    let i = 0;
    // calling base class processResponse function
    let original: any = super.processResponse.apply(this, arguments as any);
    // adding Task Id
    original.forEach((item: any) => item['Id'] = 'Task - ' + ++i);
    return original;
  }
}

@Component({
imports: [
        
        KanbanModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='dataManager' [cardSettings]='cardSettings' [allowDragAndDrop]='false' (dialogOpen)="dialogOpen($event)">
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    public dataManager: DataManager = new DataManager({
      url: 'https://services.syncfusion.com/angular/production/api/Kanban',
       adaptor: new TaskIdAdaptor
    });
    public dialogOpen(args: DialogEventArgs): void {
      args.cancel = true;
    }
}



