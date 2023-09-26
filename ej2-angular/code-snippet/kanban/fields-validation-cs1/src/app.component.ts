

import { Component } from '@angular/core';
import { CardSettingsModel, DialogSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings'  [dialogSettings]='dialogSettings'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    public dialogSettings: DialogSettingsModel = {
        fields: [
            { text: 'ID', key: 'Id', type: 'Input' },
            { key: 'Status', type: 'DropDown' },
            { key: 'Estimate', type: 'Numeric', validationRules: { range: [0, 1000] } },
            { key: 'Summary', type: 'TextArea', validationRules: { required: true } }
        ]
    } as DialogSettingsModel;
}



