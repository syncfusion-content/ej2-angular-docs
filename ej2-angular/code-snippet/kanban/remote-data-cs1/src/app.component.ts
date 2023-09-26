

import { Component } from '@angular/core';
import { CardSettingsModel, DialogEventArgs } from '@syncfusion/ej2-angular-kanban';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

@Component({
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
       url: 'https://ej2services.syncfusion.com/production/web-services/api/Kanban',
       adaptor: new ODataAdaptor,
       crossDomain: true
    });
    public dialogOpen(args: DialogEventArgs): void {
      args.cancel = true;
    }
}



