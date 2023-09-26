

import { Component, ViewChild } from '@angular/core';
import { KanbanComponent, CardSettingsModel, DialogEventArgs } from '@syncfusion/ej2-angular-kanban';
import { Ajax } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `<input type="button" id="btn" (click)="click()" value="Click"/>
  <ejs-kanban #Kanban keyField='ShipCountry' [dataSource]='dataManager' [cardSettings]='cardSettings'  (actionFailure)="onActionFailure($event)">
                <e-columns>
                  <e-column headerText='Denmark' keyField='Denmark'></e-column>
                  <e-column headerText='Brazil' keyField='Brazil'></e-column>
                  <e-column headerText='Switzerland' keyField='Switzerland'></e-column>
                  <e-column headerText='Germany' keyField='Germany'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    onActionFailure($event: any) {
        throw new Error('Method not implemented.');
    }
    @ViewChild('Kanban') public kanban?: KanbanComponent;
    public dataManager?: DataManager;
    public cardSettings: CardSettingsModel = {
        contentField: 'ShippedDate',
        headerField: 'OrderID'
    };
    click() {
        const kanban: KanbanComponent  = this.kanban as KanbanComponent;  // Grid instance
        const ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/Orders", "GET");
        ajax.send();
        ajax.onSuccess = (data: string) => {
            kanban.dataSource = JSON.parse(data);
        };
    }
}



