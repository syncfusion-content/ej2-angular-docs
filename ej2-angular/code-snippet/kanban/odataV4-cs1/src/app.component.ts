

import { Component } from '@angular/core';
import { CardSettingsModel, DialogEventArgs } from '@syncfusion/ej2-angular-kanban';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='ContactTitle' [dataSource]='dataManager' [cardSettings]='cardSettings' [allowDragAndDrop]='false' (dialogOpen)="dialogOpen($event)">
                <e-columns>
                  <e-column headerText='Order Administrator' keyField='Order Administrator'></e-column>
                  <e-column headerText='Sales Representative' keyField='Sales Representative'></e-column>
                  <e-column headerText='Export Administrator' keyField='Export Administrator'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public cardSettings: CardSettingsModel = {
        contentField: 'ContactName',
        headerField: 'SupplierID'
    };
    public dataManager: DataManager = new DataManager({
       url: 'https://services.odata.org/v4/northwind/northwind.svc/Suppliers',
       adaptor: new ODataV4Adaptor,
    });
    public dialogOpen(args: DialogEventArgs): void {
      args.cancel = true;
    }
}



